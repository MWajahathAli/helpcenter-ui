FROM artifactory.awsmgmt.massmutual.com/docker/node:18alpine-v1.0.0 as base
# ----------------------Mandatory Configuration start------------------------------------
# configure npm
ADD https://artifactory.awsmgmt.massmutual.com/artifactory/mm-certificates/mm-cert-bundle.pem.unix \
    /usr/local/share/ca-certificates/mm-cert-bundle.pem
RUN npm config set cafile /usr/local/share/ca-certificates/mm-cert-bundle.pem && \
    npm config set registry https://artifactory.awsmgmt.massmutual.com/artifactory/api/npm/npm-virtual/
# ----------------------Mandatory Configuration end------------------------------------
WORKDIR /app
# install dependencies
COPY app/package*.json ./
COPY script-runner.sh /script-runner.sh
# copy project source
COPY app/src/ ./src/
COPY app/public/ ./public/

# Unit test stage

FROM base as unittest
# Run the steps for your npm install under this for test image
# (The lines below would change depending on your configuration)
RUN npm install --include=dev
RUN npm run test:ci

# stage build name "export-test-results" must match with docker build command used in unittest.groovy ( sh "DOCKER_BUILDKIT=1 docker build -f $docker_path/$docker_file $docker_path --target export-test-results   --output .")
FROM scratch AS export-test-results
COPY --from=unittest /app/*.xml .

FROM base as prod
RUN npm ci --production --verbose
# compile react app in build/ directory
RUN npm run build

# start final build stage with blank node.js image
FROM artifactory.awsmgmt.massmutual.com/docker/node:18alpine-v1.0.0
RUN apk add --update curl && \
    rm -rf /var/cache/apk/*
# set up massmutual certs
ADD https://artifactory.awsmgmt.massmutual.com/artifactory/mm-certificates/mm-cert-bundle.pem.unix \
    /usr/local/share/ca-certificates/mm-cert-bundle.pem
RUN npm config set cafile /usr/local/share/ca-certificates/mm-cert-bundle.pem && \
    npm config set registry https://artifactory.awsmgmt.massmutual.com/artifactory/api/npm/npm-virtual/

## Install `tini` as a process manager
# RUN cd -- /opt || exit 1 && \
# 	curl -fLo /opt/tini -- "https://github.com/krallin/tini/releases/download/v0.19.0/tini" && \
# 	curl -fLs -- "https://github.com/krallin/tini/releases/download/v0.19.0/tini.sha256sum" | sha256sum -c - && \
# 	chmod +x -- /opt/tini
# RUN apk --no-cache add curl
# copy compiled react app
WORKDIR /app
ENV context_path=/
ENV container_port=8080
COPY --from=prod /app/build/ ./build
COPY --from=prod /app/node_modules ./node_modules
COPY app/server.js .

# start node server
ENTRYPOINT ["node", "server.js"]
USER node

# ----------------------Mandatory Configuration start------------------------------------
EXPOSE ${container_port}
HEALTHCHECK CMD curl --fail http://localhost:${container_port}${context_path} || exit 1
# ----------------------Mandatory Configuration end------------------------------------
