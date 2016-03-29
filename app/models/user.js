var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  loggedIn: false   // this is probably a terrible idea for security
});

module.exports = User;
