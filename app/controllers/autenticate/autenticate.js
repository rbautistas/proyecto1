var libComun 	=	require("../../../config/bin/comun/libcomun");
	usarioModel = 	require("../../models/usuarios/usuarios");
	autenticateController={		
		autenticate: function(req,resp,next){	
			var params={};					
			libComun.setGuardar(req,resp,next,usarioModel,params);
		},
		generarToken: function(req,resp,next){
			var params={};					
			libComun.setGuardar(req,resp,next,usarioModel,params);	
		}		
	};	
module.exports=autenticateController;