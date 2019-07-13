var express = require('express');
var router = express.Router();
var conact = require('../config/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
  conact.query(query, function(error, result){
    res.json(result);
  })
  
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'อิอิอิ' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'อิอิอิอิ' });
});

module.exports = router;
