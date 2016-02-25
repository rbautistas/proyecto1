
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(express.static('app'));
	
	load('app/routes').then('controllers')
	.into(app);

	app.use(express.static('public'));
	return app;
};