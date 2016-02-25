module.exports = function(app){  
  var usuario = app.controllers.user;
  console.log(usuario);
  app.get('/usuarios',/*user.isAuthenticated,*/usuario.index);
};