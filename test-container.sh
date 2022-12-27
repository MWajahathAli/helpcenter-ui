            #!/bin/sh -e
            #set +x
            echo "Test Docker Image"
            echo "Remove stale or similar container if exist running"
            status=$(docker ps | grep $IMAGE_NAME)
            if [[ $status ]]; then
                result=$(docker inspect --format='{{json .State}}' $IMAGE_NAME)
                status=$(echo $result | jq -r .Status)
                if [[ $status == "running" ]]; then
                    echo "Docker Container is running with that name: $IMAGE_NAME, deleting the container forcibly"
                    docker rm -f $IMAGE_NAME
                fi
            else
                echo "No docker container is running with that name: $IMAGE_NAME"
            fi

            TEMP_PORT="$((1000 + RANDOM % 9999))"
            echo "Running docker container on Jenkins Port $TEMP_PORT"
            docker container run -e container_port=$CONTAINER_PORT -e context_path=$CONTEXT_PATH -it --rm -d -p $TEMP_PORT:$CONTAINER_PORT --log-driver json-file --log-opt tag="{{.ImageName}}|{{.Name}}|{{.ImageFullID}}|{{.FullID}}" --name $IMAGE_NAME $IMAGE_NAME:$IMAGE_TAG
            #Wait for Spring boot app initialization and check for docker container service is healthy
            #If the container status is not healthy return as failure
            i=0
            while [[ $i -lt 120 ]]
            do
            ((i++))
            sleep 2
            result=$(docker inspect --format='{{json .State.Health}}' $IMAGE_NAME)
            status=$(echo $result | jq -r .Status)
            echo $status......
            if [[ $status == "healthy" ]]; then
                break
            fi
            done
            if [[ $status != "healthy" ]]; then
                exit 1
            fi

            #Check the greeting page expected to return with string "Hello, World"
            #If the expected result is not matching return as failure
            result=$(curl http://localhost:$TEMP_PORT$CONTEXT_PATH)
            #Fetch container log file stored in local disk
            docker_logs=$(docker container inspect --format='{{.LogPath}}' $IMAGE_NAME)
            echo "logfile path: $docker_logs"
            echo "===================== Container logs start ==========================="
            #Print the output to the console
            docker container logs --details $IMAGE_NAME
            echo "===================== Container logs end =============================="
            docker rm $IMAGE_NAME -f
            if [[ "$result" == *$RESPONSE_PAGE_CONTAINS* ]]; then
                echo "Fetched expected results, response page matches with supplied data"
                echo "$result"
            else
            echo "Test Failed, response page contains not matching"
                exit 1
            fi
