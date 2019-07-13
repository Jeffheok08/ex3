var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JEFF' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'อิอิอิ' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'อิอิอิอิ' });
});

module.exports = router;
