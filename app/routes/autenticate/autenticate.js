var autenticate=require('../../../app/controllers/autenticate/autenticate');
	module.exports = function(app){	
	  app.get('/autenticate',
	  	autenticate.autenticate);
	};