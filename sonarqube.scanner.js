const scanner = require('sonarqube-scanner')
scanner(
    {
        serverUrl: 'http://localhost:9000',
        // login on sonarqube using admin admin, create your project and generate your token
        token: 'sqp_0a7923bb0356c9d710046e7a3849223537fd6b82',
        options: {
            'sonar.projectName': 'next-boilerplate',
            'sonar.projectDescription':
                'Here I can add a description of my project',
            'sonar.projectKey': 'next-boilerplate',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        },
    },
    () => process.exit(),
)
