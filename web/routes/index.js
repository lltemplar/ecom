var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Ecom' });
});

/* GET home page. */
router.get('/api/get', function (req, res, next) {
  //request.getRedirect('/api/test/get/a', res);
  request.get('/api/test/get/a', function (e) {
    res.end("success");
  })
});

router.post('/api/post', function (req, res, next) {
  request.postRedrect('/api/test/post/add', req, res);
});




module.exports = router;
