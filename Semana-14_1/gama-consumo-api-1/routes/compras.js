const express = require('express');
const routes = express.Router()
const cielo = require('../lib/cielo')

routes.post('/', function (req, res, next) {
    // console.log(cielo.compra(req.body))
    res.status(200).json({"messagem":cielo.compra(req.body)})

})

routes.get('/:compras_id/status', function (req, res, next) {
    res.status(200).json({ "messagem": "Rodando status" })
})

module.exports = routes;