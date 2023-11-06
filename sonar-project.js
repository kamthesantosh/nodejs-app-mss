const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: http://18.210.20.9:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	   'sonar.login': 'squ_76de54d3394b659edccbfbbf54174aec6064aa1e',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'Staff@123',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
