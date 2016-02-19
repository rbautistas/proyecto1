module.exports = function(app){  
  var usuario = app.controllers.user;
  app.get('/usuarios',/*user.isAuthenticated,*/usuario.index);
};