//- Author-name- Nihar Patel
//- File-name- users.js 
//- File-description- This is an JavaScript file used to route web pages 
var express = require('express');
var router = express.Router();

/* request home page and send it to server */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nihar Patel' });
});

// request an about page and send it to server
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

// request an project page and send it server
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
// request an contact page and send it server
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
// request an services page and send it server
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services Page' });
});
module.exports = router;
