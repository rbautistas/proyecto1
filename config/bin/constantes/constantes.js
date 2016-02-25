/**
*Author: Ruben Bautista Castillo
*Descripción: Constantes de configuracion.
*Variables Globales
*/
var base = __dirname + '/';
/*
*Puerto de configuración del servidor
*/
puerto= 3000,
/*
* Url de conexion a la base de datos MongoDB produción driver
*/
produccion= 'mongodb://127.0.0.1/',
/*
* Url de conexion a la base de datos MongoDB desarrollo driver
*/
desarrollo= 'mongodb://127.0.0.1/',
/*
* Url de conexion a la base de datos MongoDB test driver
*/
prueba= 'mongodb://127.0.0.1/',
/*
*Nombre de la base de datos MongoDB
*/
dbName='dbPruebasSql',
/*
*Variable que recibe la conexion de MONGODB
*/
condb='',
/*
*	POOL DE CONNECIONES
*	// single server
*	mongoose.createConnection(uri, { server: { poolSize: 4 }});
*	// for a replica set
*   mongoose.createConnection(uri, { replset: { poolSize: 4 }});
*/
opciones={
	db: { native_parser: true },
	server: { poolSize: 5 }, //POOL  DE CONECCIONES
	replset: { rs_name: 'myReplicaSetName' },
	user: '',
	pass: ''
};

module.exports ={
		cPort : puerto, 
		cUrldb : desarrollo,
		cdbName : dbName,
		cCondb : condb,
		cOpcionesConexion : opciones
};
