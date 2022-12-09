const mysql = require('mysql2');

const pool =mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node_by_zuber',
    password : 'Zuber@786'
});

module.exports = pool.promise();
