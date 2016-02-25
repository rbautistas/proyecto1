var   conexion      =   require('../config/bin/conexion/conexion'),
	  constantes	=   require('../config/bin/constantes/constantes'),
	  express       =   require('../config/bin/express/express'),	  
	  load         	=   require('express-load'),          
	  db 			= 	conexion();	 	  
	  app			=   express();	  	 
	  module.exports = app;	  	
	console.log("servidor corriendo por el puertosss: "+constantes.cPort); 







