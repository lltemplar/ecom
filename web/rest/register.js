var express = require('express');
var router = express.Router();
var request = require('../lib/request');

router.post('/', function (req, res, next) {
  res.json({'status':'Success'});
});


module.exports = router;
