const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "ecommerce_sm32"
});

connection.connect((error )=> {
    if (error){
        console.error("error al conectar la base de datos", error)
    } else{
        console.log("conexion exitosa a la base de datos")
    }
});

module.exports = connection;