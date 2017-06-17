var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});


module.exports = router;
