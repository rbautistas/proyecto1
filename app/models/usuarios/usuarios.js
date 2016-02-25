var mongoose = require('mongoose'),
Schema = mongoose.Schema,
usuario = new Schema(
	{	
    nombre		: 	{type:String}, 
    apMaterno	: 	{type:String},
    apPaterno	: 	{type:String},
    usuarios	: 	{type:String},
    password	:	{type:String},
    idTipoUsuario : {type:Number},
    idPermisos	: 	[{type:Number}],
    modulos		: 	[{type:Number}],
    fechaAlta	:	{type:Date},
    fechaModificacion	: {type:Date, default: Date.now()},
   	correo		: 	{type:String},
   	activa		: 	{type:Boolean, default: true}
  	});
module.exports = mongoose.model('usuarios',usuario);