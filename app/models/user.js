var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema(
	{
    name: {type:String}, 
   	email: {type:String}
  	});

module.exports = mongoose.model('users',usuario);

