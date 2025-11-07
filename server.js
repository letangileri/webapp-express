//creo il server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection')

// server in ascolto
app.listen(PORT, ()=>{
    console.log(`il server sta ascoltando http://localhost:${PORT}`)
    
})

//mi serve una rotta, senza la prima rotta non posso fare nulla
app.get('/',(req,res)=>{
    res.send("hello worlddd")
    // console.log(res.send());
    
})

//creo la seconda rotta e facciamo una prima query
app.get('/api/movies', (req, res)=>{
    const sql = 'SELECT * FROM movie.movies'
    connection.query(sql, (err, results) =>{
        console.log('Errore:', err);
        console.log('Risultati:', results);
        
        res.json({movies:results})
    })
})