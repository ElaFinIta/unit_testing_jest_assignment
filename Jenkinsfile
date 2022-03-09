pipeline {
    agent any 

    stages {

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
