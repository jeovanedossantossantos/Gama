
var mysql = require('mysql2')
// const db = require('./src/db')
const dotenv = require('dotenv/config')

var connection = mysql.createConnection({
    host: process.env.PORTA,
    user: process.env.USER,
    password: process.env.PASWORD,
    database: process.env.BANCO,

})

connection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("Conector")
    }

});

// Função que atualiza os dados
const processoRow = (row, callback) =>{
    // console.log(row);

    var sql = mysql.format("UPDATE employees SET full_name = CONCAT(?,' ', ?) WHERE emp_no = ?",[row['first_name'],row['last_name'], row['emp_no']]);
    connection.query(sql)

    callback()

}

var query = connection.query("SELECT emp_no, first_name, last_name FROM employees.employees LIMIT 10;")

query.on('error',(err)=>{
    console.error(err)
}).on('result',(row)=>{
    connection.pause();

    processoRow(row, ()=>{
        connection.resume();
    })




}).on('end', ()=>{
    console.log('Sucesso!')
    connection.end()
})
console.log("ok")