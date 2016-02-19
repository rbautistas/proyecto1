var   //conexion      =   require('./config/bin/conexion/conexion'),
	  constantes	=   require('./config/bin/constantes/constantes'),
	  express       =   require('./config/bin/express/express'),	  
	  load        =     require('express-load'),          
	  app			=   express();

	  //db 			= 	conexion();	  
	  load('./app/models').then('./app/routes').then('./app/controllers').into(app);    	 	  
	  module.exports  =  app;
	  	
console.log("servidor corriendo por el puerto: "+constantes.cPort); 















