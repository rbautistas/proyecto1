module.exports 	= function(){
	var express = require('express'),	
	load 		= require('express-load'),	
	router 		= express.Router(),
	jwt        	= require("jsonwebtoken"),
	app 		= express(),
	bodyParser 	= require('body-parser'),	
	path		= require('path');
	morgan		= require('morgan');	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(app.router);
	app.use(express.favicon());
	app.use(morgan("dev"));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.cookieParser('your secret here'));
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));			
	load('./app/routes').into(app);
	app.use(express.static('public'));

	/*
	*Se permite peticiobes provenientes de diferentes dominios
	*Para asi desarrollar un sistema con independencias de clientes
	*/
	
	app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
	});
	return app;
};