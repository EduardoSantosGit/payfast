var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'eduardo',
		database: 'payfast'
	});
}

module.exports = function(){
	return createDBConnection;
}