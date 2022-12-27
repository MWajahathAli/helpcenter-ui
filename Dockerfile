#Build docker image for helloworld app nodejs
#build the image :   docker build -t helloworld-node:14-alpine .
#Run the container: docker container run -d -p 3000:3000 --name helloworld helloworld-node:14-alpine
#Test the image: curl http://localhost:3000
#Remove the container: docker container rm helloworld --force

FROM artifactory.awsmgmt.massmutual.com/docker/node:17alpine-v1.0.2 as base
# ----------------------Mandatory Configuration start------------------------------------
RUN apk --no-cache add curl
# Supplied as environment variable while running the container which overides this value, else used default value
ENV context_path=/
ENV container_port=8080
# ----------------------Mandatory Configuration end------------------------------------

#ENV NODE_ENV=dev
ADD src /app

WORKDIR /app
COPY script-runner.sh /script-runner.sh

# ----------------------Mandatory Configuration start------------------------------------
FROM base as test
# Run the steps for your npm install under this for test image
# (The lines below would change depending on your configuration)
RUN npm install --dev
RUN chmod +x script/test && ./script/test
ENTRYPOINT ["sh", "/script-runner.sh"]
# ----------------------Mandatory Configuration end------------------------------------

# Unit test stage

FROM base as unittest
# Run the steps for your npm install under this for test image
# (The lines below would change depending on your configuration)
RUN npm install --dev
RUN chmod +x script/hello-world && ./script/hello-world ; exit 0
ENTRYPOINT ["sh", "/script-runner.sh"]

# stage build name "export-test-results" must match with docker build command used in unittest.groovy ( sh "DOCKER_BUILDKIT=1 docker build -f $docker_path/$docker_file $docker_path --target export-test-results   --output .")

FROM scratch AS export-test-results
COPY --from=unittest /app/*.xml .

# ----------------------Mandatory Configuration start------------------------------------
FROM base as prod
# Run the steps for your npm install under this for final image
RUN npm install --production
# ----------------------Mandatory Configuration end------------------------------------

# ----------------------Mandatory Configuration start------------------------------------
EXPOSE ${container_port}
HEALTHCHECK CMD curl --fail http://localhost:${container_port}${context_path} || exit 1
# ----------------------Mandatory Configuration end------------------------------------
ENTRYPOINT ["sh", "/script-runner.sh"]
