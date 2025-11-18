const connection = require('../database/connection')

//dammi tutti i film
function index(req, res){
    const sql = 'SELECT * FROM movie.movies'
    connection.query(sql, (err, results) =>{
        if(err) return err.status(500).json({error: err.message})
        console.log('Errore:', err);
        console.log('Risultati:', results);
        
        res.json({movies:results})
    })
}


//dammi il singolo film
function show(req,res){
    const sql= 'SELECT * FROM movie.movies WHERE movie.movies.id = ?'
    const sqlReview = 'SELECT * FROM movie.reviews WHERE reviews.movie_id = ?'
    const movieId = Number(req.params.id)
    console.log(movieId);
    
    connection.query(sql, [movieId], (err,results)=>{
        console.log(results);
        
        if(err){
            return res.status(500).json({error: err.message})
        }
        if(results.length === 0) return res.status(404).json({message: 'non ho trovato il libro' })
        console.log('Errore:', err);
        console.log('Risultati:', results);
        connection.query(sqlReview, [movieId], (errReview,resultsReview)=>{
        if(errReview){
            return res.status(500).json({error: errReview.message})
        }
        
        const thisMovie = {...results[0], review_:resultsReview}
        console.log(thisMovie);
        
        res.json({thisMovie});       
        })
        

    })
}


module.exports = {
    index,
    show
}