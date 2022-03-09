pipeline {
    agent any 

    stages {
        stage ("Install npm") {
            steps {
                sh "npm install"
                echo 'Install node modules'
            }
        }
        stage ("Install jest") {
            steps {
                sh "npm install jest"
                echo 'Install jest with npm install jest'
            }
        }
        stage ("Build") {
            steps {
               sh "npm test"
               echo 'testing with npm test'
            }
        }
    }
} 
