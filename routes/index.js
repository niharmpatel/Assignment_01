//- Author-name- Nihar Patel
//- File-name- users.js 
//- File-description- This is an JavaScript file used to route web pages 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nihar Patel' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});


router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Page' });
});
module.exports = router;
