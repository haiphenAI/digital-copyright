var request = require('superagent');
var logger = require('./');

// Will log when the request is triggered:
request.get('https://github.com/').use(logger({ outgoing: true })).end();


// Will include a request timestamp in log:
request.get('https://github.com/').use(logger({ timestamp: true })).end();
