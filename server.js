/**
*   nodemon
*   Referencia http://nodemon.io/
*   instalacion
*   npm install -g nodemon
*   Ejemplo
*   nodeamon start
*	Referencia de instalacion para levantar un servicio
*	npm install daemonize2
*	Ejemplo
*	node server.js
*	npm install forever 
*	Ejemplo
*	forever start ./config/bin/server/www
**/

var daemon = require("daemonize2").setup({
    main: "./config/bin/server/www",
    name: "sampleapp",
    pidfile: "sampleapp.pid"
});

switch (process.argv[2]) {

    case "start":
        daemon.start();
        break;

    case "stop":
        daemon.stop();
        break;

    default:
        console.log("Usage: [start|stop]");
}