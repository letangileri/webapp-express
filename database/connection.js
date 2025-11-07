const mysql2 = require('mysql2');
const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME
})

connection.connect((err)=>{
    if(err){
        console.error("Ops errore ", err)
        return;
    }
    console.log("Connesso al db");
    
})

module.exports = connection;