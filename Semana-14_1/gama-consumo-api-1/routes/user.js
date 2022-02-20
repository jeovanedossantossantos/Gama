const express = require('express');
const routes = express.Router()

routes.get('/', function(req, res, next){
 res.send("respond with a resource")
})

module.exports = routes;