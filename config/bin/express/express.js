
/*var   compression = require('compression'),      
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser');
      
    
*/
module.exports = function(){	                              
//  var env = require('./env');
    var  express = require('express'),          
         bodyParser = require('body-parser'),        
         app = express(),          
         
         errorHandler = require('errorhandler'),               
         path = require('path'),
         router = express.Router();   
         app.use(express.static(__dirname + '/app'));
         app.use(bodyParser.urlencoded({extended: true}));
         app.use(bodyParser.json());
         app.use(router);   
         //app.use(express.static('public'));
         
         if('development' == app.get('env')){
           app.use(errorHandler());
         }

         
        //app.use(bodyParser());  
        //require('../../../app/routes/index.js')(app);    
        //app.use(express.static('public'));       
    console.log("express corriendo");
    return app;    
 };