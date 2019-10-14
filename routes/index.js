var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Nihar Patel' });
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
module.exports = router;
