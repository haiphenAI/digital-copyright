'use strict';
var url = require('url');
var querystring = require('querystring');
var chalk = require('chalk');
var superagent = require('superagent');

exports = module.exports = function(options) {
  if(!options) options = {};
  if(options instanceof superagent.Request)
    return attachSuperagentLogger({}, options);

  return attachSuperagentLogger.bind(null, options);
};

function attachSuperagentLogger(options, req) {
  var start = new Date().getTime();
  var timestamp = new Date().toISOString();

  var uri = url.parse(req.url);
  var method = req.method;

  if(options.outgoing) {
    console.log('%s %s %s %s %s %s',
      chalk.gray(
        rightPad(uri.protocol.toUpperCase().replace(/[^\w]/g, ''), 5)
      ),
      chalk.gray(rightPad(method.toUpperCase(), 'delete'.length)),
      options.timestamp ? chalk.gray('[' + timestamp + ']') : '',
      chalk.gray(' - '),
      chalk.gray(uri.href + (req.qs ? '' : '?' + querystring.encode(req.qs))),
      chalk.gray('(pending)')
    );
  }

  req.on('response', function(res) {
    var now = new Date().getTime();
    var elapsed = now - start;

    var st = res.status;
    if(st < 300) {
      st = chalk.green(st);
    } else if (st < 400) {
      st = chalk.yellow(st);
    } else {
      st = chalk.red(st);
    }


    console.log('%s %s %s %s %s %s',
      chalk.magenta(
        rightPad(uri.protocol.toUpperCase().replace(/[^\w]/g, ''), 5)
      ),
      chalk.cyan(rightPad(method.toUpperCase(), 'delete'.length)),
      options.timestamp ? chalk.gray('[' + timestamp + ']') : '',
      st,
      chalk.gray(uri.href + (req.qs ? '' : '?' + querystring.encode(req.qs))),
      chalk.gray('(') +
        chalk[colorForSpeed(elapsed)](elapsed + 'ms') +
        chalk.gray(')')
    );
  });
}

function colorForSpeed(ms) {
  if(ms < 200) {
    return 'green';
  } else if(ms < 1000) {
    return 'gray';
  } else if(ms < 5000) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function rightPad(str, len) {
  var l = str.length;
  if(l < len) {
    for(var i = 0, n = len - l; i < n; i++) {
      str += ' ';
    }
  }
  return str;
}
