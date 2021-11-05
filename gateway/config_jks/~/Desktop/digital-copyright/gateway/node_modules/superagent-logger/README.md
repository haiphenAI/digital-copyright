superagent-logger
=================
[![npm downloads](http://img.shields.io/npm/dm/superagent-logger.svg)](https://www.npmjs.org/package/superagent-logger)
[![npm version](http://img.shields.io/npm/v/superagent-logger.svg)](https://www.npmjs.org/package/superagent-logger)
- - -
superagent middleware for adding NPM-style logging. Useful for debugging
HTTP clients.

## Installing
This package is published to NPM as `superagent-logger`.
```
npm install superagent-logger
```

## Usage
```javascript
var request = require('superagent');
var logger = require('superagent-logger');

request.get('https://github.com/').use(logger).query({ q: 'search' }).end();
request.post('https://github.com/').use(logger).end();
```
This will produce the following output:

![screeshot1](/screenshot1.png)

## Options

### Outgoing

If you want to log requests when they're fired, use the `outgoing` option:
```javascript
// Will log when the request is triggered:
request.get('https://github.com/').use(logger({ outgoing: true })).end();
```

![screeshot2](/screenshot2.png)

### Timestamp

To log a request timestamp with each log entry, use the `timestamp` option:
```javascript
// Will log when the request is triggered:
request.get('https://github.com/').use(logger({ timestamp: true })).end();
```

```
HTTPS GET   [2015-12-03T18:09:19.476Z] 200 https://github.com/ (9219ms)
```

## License
This code is licensed under the MIT license for Pedro Tacla Yamada.
