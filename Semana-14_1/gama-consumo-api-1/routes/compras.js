const express = require('express');
const routes = express.Router()

routes.post('/', function(req, res, next){
 res.status(200).json({"messagem":"Rodando"})
})

routes.get('/:compras_id/status', function(req, res, next){
    res.status(200).json({"messagem":"Rodando status"})
   })

module.exports = routes;