var mongoose=require('mongoose');
/*
* variables de configuracion de referencia
*/
var constantes = require('../constantes/constantes');

/*
*	uri contiene la ruta a la conexion de BD.
*/

var uri=constantes.cUrldb+constantes.cdbNames;
module.exports = function(){	
    var db=mongoose.connect(uri,constantes.cOpcionesConexion,function(err){
    	if(err)
    		console.log("Error de conexion: "+err);
    	else
    		console.log("Conexion con exito: ");
    });    
    return db;    
};