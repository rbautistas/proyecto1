var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema(
	{
    name: String, 
   	email: String
  	});

module.exports = mongoose.model('users',usuario);

