module.exports = function(app){  
  //var usuario = app.controllers.user;
  app.get('/',function(req, res, next) {
  res.send("MI PRIMER SCRIPT NODE JS");
  });
};
