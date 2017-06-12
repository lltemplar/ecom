var express = require('express');
var router = express.Router();
var request = require('../lib/request');

router.post('/', function (req, res, next) {
  request.postRedrect('/api/v1/member/regist',req,res);
});


module.exports = router;
