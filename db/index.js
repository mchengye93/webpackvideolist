const mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    database: 'videolist'
}
const connection = mysql.createConnection(config);


module.exports = connection;