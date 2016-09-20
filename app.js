'use strict'

var speakeasy = require('speakeasy');
var bPromise = require('bluebird');
var fs = bPromise.promisifyAll(require('fs'));
var filename = 'users.json';

return fs.readFileAsync(filename, 'utf8')
  .then(function (contents) {
    var users = JSON.parse(contents);
    users.map(function (user) {
      console.log(user.email, ' ==> ', speakeasy.totp({
        secret: user.secret,
        encoding: user.encoding
      }));
    });
  });
