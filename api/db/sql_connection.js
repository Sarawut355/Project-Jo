const mysql = require('mysql');

// NOTE: create start mysql connection
const connection = mysql.createConnection({
    host: '127.0.0.1', //mysql database host name
    user: 'root', //mysql database user name
    password: '', //mysql database password
    database: 'decide' //mysql database name
});

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected with tot database...');
});


module.exports = {
    connection
};