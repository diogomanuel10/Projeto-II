var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'webitcloud.net',
    user: 'webitclo_G507',
    password: 'BD1617G506965',
    database: 'webitclo_G507'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()