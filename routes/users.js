//- Author-name- Nihar Patel
//- File-name- users.js 
//- File-description- This is an JavaScript file used to route web pages 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
