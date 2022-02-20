
var mysql = require('mysql2')
// const db = require('./src/db')
const stream = require('stream')
const dotenv = require('dotenv/config')

var connection = mysql.createConnection({
    host: process.env.PORTA,
    user: process.env.USER,
    password: process.env.PASWORD,
    database: process.env.BANCO,

})

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log("Conector")
    }

});

var updateStream = new stream.Transform({ highWaterMark: 5, objectMode: true });

updateStream._write = (chunk, encoding, callback) => {
    var sql = mysql.format("UPDATE employees SET full_name = CONCAT(?,' ', ?) WHERE emp_no = ?", [chunk['first_name'], chunk['last_name'], chunk['emp_no']]);
    connection.query(sql)
    callback();
}

var query = connection.query("SELECT emp_no, first_name, last_name FROM employees.employees LIMIT 10;").on('end', ()=>{
    connection.end()

})

query.stream({ highWaterMark: 5 }).pipe(updateStream);
// connection.end()
console.log("ok")