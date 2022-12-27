//import libraries
import lib.JenkinsUtilities

// Perform unit test
def unitTest(){
    def utils = new JenkinsUtilities(this)
    docker_file = "Dockerfile"
    docker_path = "${WORKSPACE}/$BUILD_FOLDER"
    try {
        sh "DOCKER_BUILDKIT=1 docker build -f $docker_path/$docker_file $docker_path --target export-test-results --output ."
    } catch (Exception e) {
        env.CI_STATUS = "FAILURE"
        env.status_msg = "$EKS_OPS - Performing Unit Test Failed with error: ${e.message}"
        utils.printError "Error encountered during tests"
        echo 'Exception occured: ' + e.toString()
        throw e

    } finally {
        utils.printBold("export unit test results")
        // Make all the test files to be current timestamp to export all of them
        sh "touch *.xml"
        junit '*.xml'
        utils.printSuccess("Successfully performed unit tests")
        // Keep the below lines if you want build to fail when unit tests fail. Omitting these lines would mark the build Unstable and continue with next stages
        if (currentBuild.result == 'UNSTABLE' || currentBuild.result == 'FAILURE') {
            currentBuild.result = 'FAILURE'
            utils.errorOutBuild("Unit Tests failed")
        }            
        }

    }

return this
