//creo il server
const express = require("express");
const app = express();
const moviesRouter = require("./routes/movies") //c'è l'oggetto router che abbiamo esportato dal file movies
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({origin: 'http://localhost:5173'}))


// server in ascolto
app.listen(PORT, ()=>{
    console.log(`il server sta ascoltando http://localhost:${PORT}`)
    
})

//mi serve una rotta, senza la prima rotta non posso fare nulla
app.get('/',(req,res)=>{
    res.send("hello worlddd")
    // console.log(res.send());
    
})

app.use('/api/movies', moviesRouter)
