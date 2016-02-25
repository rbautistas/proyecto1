var usuario=require('../../../app/controllers/usuarios/usuarios');
module.exports = function(app){	
  app.get('/usuarios',usuario.index);
};