var   conexion      =   require('../config/bin/conexion/conexion'),
	  constantes	=   require('../config/bin/constantes/constantes'),
	  express       =   require('../config/bin/express/express'),       
	  db 			= 	conexion();	 	  
	  app			=   express();	  	 
	  module.exports = app;	  	
	console.log("servidor corriendo por el puertosss: "+constantes.cPort); 







