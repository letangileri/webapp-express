//importo
const express = require('express');
//creo istanza del router
const router = express.Router();
const movieController = require('../controller/movieController')

//creo la seconda rotta e facciamo una prima query
router.get('/', movieController.index)

router.get('/:id', movieController.show)




//esporto il router
module.exports = router