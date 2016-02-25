module.exports = function(){
	var express 	= require('express'),	
	load 	= require('express-load'),	
	router = express.Router(),
	app = express(),
	bodyParser 	= require('body-parser'),	
	path		= require('path');	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(app.router);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));			
	load('./app/routes').then('./app/models').into(app);
	app.use(express.static('public'));
	return app;
};