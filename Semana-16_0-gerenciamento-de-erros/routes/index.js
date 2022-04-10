var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express tt' });
  next(new Error('Teste'));
});

module.exports = router;
