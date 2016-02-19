var mongoose=require('mongoose');
/*
* variables de configuracion de referencia
*/
var constantes = require('../constantes/constantes');
/*
*	uri contiene la ruta a la conexion de BD.
*/
var uri=constantes.cUrldb+constantes.cdbName;
module.exports = function(){	
	console.log(uri);
    var db=mongoose.connect(uri);
    return db;    
};