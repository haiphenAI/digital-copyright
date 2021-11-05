var request = require('superagent');
var logger = require('./');

request.get('https://github.com/').use(logger).query({q: 'search'}).end();
request.post('https://github.com/').use(logger).end();
