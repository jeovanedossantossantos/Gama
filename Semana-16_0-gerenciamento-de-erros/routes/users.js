var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var custom_error = require('../erross/custom_error')
/* GET users listing. */
router.get('/', function(req, res, next) {
  // next(new Error('Erro de testes'))
  // res.send('respond with a resource');
  try{
    fs.readFile('demofile1.html', function(err, data) {
      console.log(data);
      if(err) {
        next(new Error("Arquivo não encontrado encontrado"));
      }else{
        res.send("Arquivo encontrsdo");
      }
     
      // res.writeHead(200, {'Content-Type': 'text/html'});
      // res.write(data);
      // return res.end();
    });
  }catch(e){
    next(new CustomError("Estamos com um problema, tente mais tarde!"));
  }
});

module.exports = router;
