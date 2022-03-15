const express = require('express');
const routes = express.Router()

routes.get('/', function(req, res, next){
    res.render('index',{title: 'Express'});
})

module.exports = routes;