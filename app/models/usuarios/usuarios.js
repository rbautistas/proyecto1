<<<<<<< HEAD
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
=======
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
        fechaAlta	:	{type:Date, default: Date.now()},
        fechaModificacion	: {type:Date, default: Date.now()},
       	correo		: 	{type:String},
       	activa		: 	{type:Boolean, default: true},
        token     :   {type: String}
      	});
    module.exports = mongoose.model('usuarios',usuario);
>>>>>>> 08c76f237afd172d6f8d6c420b37ab7282f1af95
