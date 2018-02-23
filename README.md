To build this project you will need node and npm.

To install all dependencies, please run below sequence of commands
```bash
$ git clone https://github.com/anikakalbrun/utrack.git
$ cd utrack
$ npm install
```

To build this project
```bash
$ npm run build
``` 

To run this project
```bash
$ npm run start
``` 

Before you run tests you may want to disable watch mode
```bash
$ export CI=true // unix
$ set CI=true // windows
``` 

To run tests
```bash
$ npm run test
``` 

To get code coverage information
```bash
$ npm test -- --coverage