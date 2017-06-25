var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Ecom' });
});

router.post('/logout', function (req, res, next) {
  req.session.user = undefined;
  res.end("success")
});

module.exports = router;
