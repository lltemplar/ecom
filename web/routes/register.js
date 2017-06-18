var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('register', { title: 'Register' });
});

router.post('/', function (req, res, next) {
  request.postRedrect('/api/v1/member/register',req,res);
});

module.exports = router;