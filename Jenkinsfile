@Library('swift-libs@5.4.0') _
import lib.Slack
import lib.JenkinsUtilities

//Create objects
def slack = new Slack(this)
def utils = new JenkinsUtilities(this) 

//Dockers are stored in Jfrog Artifactory for more details about this docker image https://github.com/massmutual/swift-dockers/tree/main/swift-alpine-k8s
DOCKER_IMAGE = "artifactory.awsmgmt.massmutual.com/daas-swift-docker/swift-alpine-k8s:aws-docker-1.0.3"
// Docker container arguments when docker runs
DOCKER_ARGS = "-u root -v '/var/run/docker.sock:/var/run/docker.sock:rw' " 

node(){
        if (( JENKINS_ENV.toLowerCase() == "sandbox") || ( JENKINS_ENV.toLowerCase() == "dev" )) {
            env.VAULT_NAMESPACE = "admin/dev"
            utils.printSuccess("You are in ${JENKINS_ENV} environment")  
        }
        else {
            env.CI = 'false'
             utils.printSuccess("You are in ${JENKINS_ENV} environment") 
            if ( JENKINS_ENV.toLowerCase() == "nonprod") {
              env.VAULT_NAMESPACE = "admin/nprd"
            }
            else if ( JENKINS_ENV.toLowerCase() == "prod") {
              env.VAULT_NAMESPACE = "admin/prd"
            }                            
        }
}

pipeline
{
    agent any
    // Define environment variables which can be used in the pipeline at any stage

    environment {
        HOME = "/var/lib/jenkins"
        //Download helm chart from github repo
        //HELM_CHART_REPO = "https://massmutual.github.io/swift-helm-charts/"
        //Download helm chart from Jfrog Artifactory
        HELM_CHART_REPO = "https://artifactory.awsmgmt.massmutual.com/artifactory/daas-swift-helm-local/"
        //Enable chart required credentials to download helm charts
        HELM_CHART_PRIVATE = 'true'
        HELM_CHART_APP = "mmkubeapps"
        HELM_CHART_VERSION = "0.1.45"
        NODE_EXTRA_CA_CERTS = '/root/.pki/tls-ca-bundle.pem'
        ORG = 'massmutual'
        //Validate Params
        GIT_REPO = "${GIT_URL}"
        BRANCH_NAME = validateParam(env.BRANCH_NAME, "BRANCH_NAME")
        // Template App repo will be cloned under 'appRepo' folder
        BUILD_FOLDER = "appRepo"
        //Fetch snyk token from Jenkins credentials
        SNYK_TOKEN = credentials('snykid')
    }

    // Stages begin here configured each stage for specific task
    stages {
        //Checkout App Build Repo and Load CI.YML & initiliaze env variables
        stage('Read environment specific values'){
            steps {
                checkout([
                $class: 'GitSCM',
                branches: [[name: BRANCH_NAME]],
                extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: BUILD_FOLDER]],
                userRemoteConfigs: [[url: GIT_REPO, credentialsId: 'swiftci']]
                ])

                script {
                    timestamps {                                      
                        ansiColor {
                        yaml_data = readYaml (file: "$BUILD_FOLDER/CI.yml") 
                        env.IMAGE_NAME = yaml_data.image.image_name
                        env.SLACK_CHANNEL = yaml_data.slack.slack_channel
                        env.JFROG_ARTIFACTORY = yaml_data.artifactory.jfrog_artifactory
                        env.SWIFT_ARTIFACTORY_USER = yaml_data.artifactory.swift_artifactory_user
                        env.AWS_ECR_REGISTRY = yaml_data.artifactory.aws_ecr_registry
                        env.REGION = yaml_data.artifactory.aws_ecr_region
                        env.CONTAINER_PORT = yaml_data.url.container_port
                        env.CONTEXT_PATH = yaml_data.url.context_path
                        env.RESPONSE_PAGE_CONTAINS = yaml_data.url.response_page_contains
                        if (yaml_data.containsKey("buildargs")){
                            env.ARGS_ENABLED = yaml_data.buildargs.enabled                         
                            env.ARGS = yaml_data.buildargs.args
                        } 
                        else {
                            env.ARGS = ''
                            env.ARGS_ENABLED = 'false'
                        }
                        if (yaml_data.containsKey("security")){
                            env.ENABLE_SNYK = yaml_data.security.enable_snyk
                            env.ENABLE_LINT = yaml_data.security.enable_lint
                        }
                        else {
                            env.ENABLE_SNYK = 'true'
                            env.ENABLE_LINT = 'true'
                        }
                        if ("$ROLLBACK" == 'false') {
                            env.EKS_OPS = 'Deploy to EKS'
                        }
                        else {
                            env.EKS_OPS = 'Rollback to previous Revision'
                        }
                        if (yaml_data.containsKey("unittest")){
                            env.UNIT_TEST_ENABLED = yaml_data.unittest.enabled
                            env.GROOVY_FILE = yaml_data.unittest.groovy_file 
                        } 
                        else {
                            env.UNIT_TEST_ENABLED = "false"                   
                        }
                        if (yaml_data.containsKey("vault")){
                            env.USE_SAAS_VAULT = yaml_data.vault.use_saas_vault
                            if ("$USE_SAAS_VAULT" == 'yes'){
                                env.VAULT_URL   = yaml_data.vault.saas_vault_url
                                env.SECRET_PATH = yaml_data.vault.saas_secret_path
                                env.VAULT_KEY   = yaml_data.vault.saas_vault_key
                                utils.printBold("Fetching secrets from SaaS Vault") 
                            }
                            else{
                                env.VAULT_URL   = yaml_data.vault.legacy_vault_url
                                env.SECRET_PATH = yaml_data.vault.secret_path
                                env.VAULT_KEY   = yaml_data.vault.vault_key
                                utils.printBold("Fetching secrets from Legacy Vault") 
                            }
                            if (yaml_data.vault.containsKey("vault_credential_id")){
                                env.VAULT_CREDENTIAL_ID = yaml_data.vault.vault_credential_id
                            }
                            else {
                                env.VAULT_CREDENTIAL_ID = "saas_vault"
                            }
                        } 
                        else {
                            echo "Vault Parameters are not correct"
                            exit 1
                        }
                        env.CI_STATUS = 'SUCCESS'
                        if (yaml_data.artifactory.containsKey("artifactory_url")){
                            env.ARTIFACTORY_URL = yaml_data.artifactory.artifactory_url
                        }
                        else {
                            env.ARTIFACTORY_URL = "artifactory.awsmgmt.massmutual.com"
                        }
                        }
                    }
                }                
            }
        }
            
         //This stage will run a precheck on the repository code
        stage("Pre Check"){
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Running Pre Check")                            
                            securityServices.preCheck()
                        }
                    }
                }
            }
        }
        //This stage will validate the Dockerfile using Hadolint
        stage("Validate Dockerfile using Hadolint"){
            when {
                allOf {
                    environment name: 'ENABLE_LINT', value: 'true'
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Validate Dockerfile")                            
                            securityServices.validateDockerfile()
                        }
                    }
                }
            }
        }


        //This stage will get Image tag
        stage("Image Tagging"){
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Fetch Image Tag")                            
                            semanticRelease.getImageTag()
                        }
                    }
                }
            }
        } 

        // This stage perform unitTest reactjs app
        stage("Perform unit test"){
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                    environment name: 'UNIT_TEST_ENABLED', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Perform Unit test")
                            def loadtest = load "${BUILD_FOLDER}/${GROOVY_FILE}"
                            loadtest.unitTest()
                        }
                    }
                }
            }
        }     

        //This stage will build reactjs
        stage("reactjs Build and Package"){
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("reactjs Build & Package")                            
                            buildServices.buildDockerImage()
                        }
                    }
                }
            }
        }

        // This stage scan the built image using SNYK
        stage("SNYK Scans Docker Image"){
            when {
                allOf {
                    environment name: 'ENABLE_SNYK', value: 'true'
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Running SNYK scan")
                            //If vulnerabilities are found after the scan, the pipeline fails and exits
                            securityServices.scanDockerImage()
                        }
                    }
                }
            }
        }


        //This stage will run the docker container and run tests on it, if code unit test fails for any reason pipeline stops here
        stage("Test Docker container"){
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Test Docker Container")
                            testServices.testDockerContainer()
                            }
                    }
                }
            }
        }
        
        // After successfull testing, this stage will push the docker image to Jfrog artifact
        stage("Pushing Docker image to Jfrog Artifactory"){
            when {
                allOf {
                    not { environment name: 'JFROG_ARTIFACTORY', value: '' } 
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{ 
                script {           
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Push image to Jfrog Artifactory")
                            artifacts.pushDockerImageToJfrogArtifactory()                  
                        }
                    }
                }
            }                                

        }
        
        // After successfull testing, this stage will push the docker image to AWS ECR
        stage("Pushing Docker image to AWS ECR") {
            when {
                allOf {
                    not { environment name: 'AWS_ECR_REGISTRY', value: '' }
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
            steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Push image to AWS ECR")
                            artifacts.pushDockerImageToAWSECR()
                        }
                    }
                }
            }
        }

        // This stage will remove the docker image from the jenkins workspace after pushing it to Jfrog artifact/AWS ECR
        stage("Cleaning up") {
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
           steps{
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("Cleaning up")
                            cleanupServices.dockerCleanup()
                        }
                    }
                }
           }
        }

        //This stage will send notification on slack channel once the CI pipeline has been successfully completed
        stage ('Slack Notification about reactjs app Build') {
            when {
                allOf {
                    environment name: 'ROLLBACK', value: 'false'
                    environment name: 'CI', value: 'true'
                }
            }
           steps {
               script {
                    timestamps {                                      
                        ansiColor {
                        utils.printSuccess("reactjs app build has been done")
                        msg = "reactjs App CI Pipeline has been successfully completed - Job "
                        //status = "$currentBuild.cuurentResult"
                        String status = currentBuild.result ?: 'SUCCESS'
                        utils.printBold("${status}")
                        slack.slackNotification(SLACK_CHANNEL,msg,status)
                        }
                    }
               }   
               
           }
         }   
         
        //This stage is running inside docker container amd will pull docker image from Jfrog artifactory and deploy to EKS cluster
         stage("Deploy to EKS") {
             agent {
                 docker {
                    image "${DOCKER_IMAGE}"
                    args "${DOCKER_ARGS}"
                 }
             }
            when {
                anyOf {
                    environment name: 'ROLLBACK', value: 'true'
                    environment name: 'CD', value: 'true'
                }
            }
             steps{
                checkout([
                $class: 'GitSCM',
                branches: [[name: BRANCH_NAME]],
                extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: BUILD_FOLDER]],
                userRemoteConfigs: [[url: GIT_REPO, credentialsId: 'swiftci']]
                ])
                 script {
                    timestamps {                                      
                        ansiColor {
                            yaml_data = readYaml (file: "$BUILD_FOLDER/CI.yml") 
                            utils.printSuccess("You are in ${JENKINS_ENV} environment")  
                            if ( JENKINS_ENV.toLowerCase() == "sandbox") {
                                utils.printBold("Deploy to EKS in SANDBOX environment")
                                kubernetes.deployKubernetesApps(yaml_data, "sandbox")                                
                            }
                            else if ( JENKINS_ENV.toLowerCase() == "dev") {
                                utils.printBold("Deploy to EKS in DEV environment")
                                kubernetes.deployKubernetesApps(yaml_data, "dev")                                
                            }
                            else if ( JENKINS_ENV.toLowerCase() == "nonprod") {
                                utils.printBold("Deploy to EKS in NONPROD environment")
                                kubernetes.deployKubernetesApps(yaml_data, "nonprod")                                
                            }
                            else if ( JENKINS_ENV.toLowerCase() == "prod") {
                                utils.printBold("Deploy to EKS in PROD environment")
                                kubernetes.deployKubernetesApps(yaml_data, "prod")                        
                            }
                            else {
                                utils.printError("JENKINS_ENV is not defined")
                            }
                        }
                    }
                 }
             }
         }
     
        //This stage will send notification on slack channel once the CD pipeline has been successfully completed
        stage ('Slack Notification about reactjs app deployment') {
            when {
                anyOf {
                    environment name: 'ROLLBACK', value: 'true'
                    environment name: 'CD', value: 'true'
                }
            }
           steps {
                script {
                    timestamps {                                      
                        ansiColor {
                            utils.printSuccess("reactjs app deployed to eks successfully")
                            msg = "$EKS_OPS - reactjs App CD Pipeline has been successfully completed - Job "
                            //status = "$currentBuild.result"
                            String status = currentBuild.result ?: 'SUCCESS'
                            utils.printBold("${status}")
                            slack.slackNotification(SLACK_CHANNEL,msg,status)  
                        }
                    }
                }              
           }
         }             
        }
        //This stage is used for post cleanup
         post {
             failure {

           script {
                    timestamps {                                      
                        ansiColor {
                            utils.printBold("${CI_STATUS}")
                            if("${CI_STATUS}" == 'FAILURE' || "${CI_STATUS}" == 'UNSTABLE' ) {
                                utils.printError("Swift Node JS EKS Helm CI/CD failed  ")
                               // msg = "$EKS_OPS - Swift Node JS EKS Helm CI/CD Pipeline has failed - Job "
                                status = "$currentBuild.result"
                                slack.slackNotification(SLACK_CHANNEL,status_msg,status)
                            }
                        }
                    }
            }
        }
        // Clean after build
        always {
            cleanWs()
            dir("${env.WORKSPACE}@tmp") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@script") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@script@tmp") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@libs") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@2") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@2@tmp") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@3") {
            deleteDir()
            }
            dir("${env.WORKSPACE}@3@tmp") {
            deleteDir()
            }
           }
        } 

}
