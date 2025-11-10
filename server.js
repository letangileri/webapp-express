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
        if(err) return err.status(500).json({error: err.message})
        console.log('Errore:', err);
        console.log('Risultati:', results);
        
        res.json({movies:results})
    })
})

app.get('api/movies/:id', (req,res)=>{
    const sql= 'SELECT * FROM movie.movies WHERE movie.movies.id = ?'
    const movieId = Number(req.params.id)
    connection.query(sql, [movieId], (err,results)=>{
        console.log(results);
        
        if(err){
            return err.status(500).json({error: err.message})
        }
        if(results.length === 0) return res.status(404).json({message: 'non ho trovato il libro' })
        console.log('Errore:', err);
        console.log('Risultati:', results);
        
        const thisMovie = {...results[0], review: []}
        console.log(thisMovie);
        
        res.json({thisMovie});
    })
})
