// exports.index = function(req, res, next) {
//   var usuario = req.app.models.user;
//   usuario.findById(0, function(user){
//     res.send('Have a user: ' + user.name + ' - ' + user.email);
//   });  
//   	res.send('Have a user: ');
// };
module.exports = function(app){
	//var usuarios= app.models.users;
	var UsuarioController = {		
		index: function(req,res){
			res.send("hola express");
		}		
	}
	return UsuarioController;
};