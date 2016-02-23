
/*var   compression = require('compression'),      
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser');
      
    
*/


module.exports = function(){	                              
//  var env = require('./env');

         var      express = require('express'),          
         bodyParser = require('body-parser'),        
         app = express(),                            
         path = require('path');

         
         app.use(express.static(path.join(__dirname + "/app")));
         //app.use(bodyParser.urlencoded({extended: true}));
         app.use(express.logger('dev'));
         app.use(express.json);
         app.use(express.urlencoded());         
         app.use(express.methodOverride());
         app.use(app.router);
         app.use(express.static(path.join(__dirname + "/public")));

         if('development' == app.get('env')){
           app.use(express.errorHandler());
         }
       
         //app.use(express.Router());
         //app.use(express.static('public'));                           
        //app.use(bodyParser());  
        //require('../../../app/routes/index.js')(app);    
        //app.use(express.static('public'));       
    console.log("express corriendo");
    return app;    
 };