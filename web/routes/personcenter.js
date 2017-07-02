var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  var data = {};
  data.title = 'Person Center';
  data.menu = [{
    text: 'My Consumption',
    url: '/personcenter/myconsumption',
    children: []
  }, {
    text: 'Personal Info',
    url: '/personcenter/personalinfo',
    children: [{
      text: 'Modify Profile',
      url: '/personcenter/modifyprofile',
      children: []
    }, {
      text: 'Change Password',
      url: '/personcenter/changepassword',
      children: []
    }]
  }];
  //data.menu = JSON.stringify(data.menu);
  //console.log(data.menu);
  res.render('personcenter/home', data);
});

router.get('/:route', function (req, res, next) {
  var route = req.params.route;
  res.render('personcenter/' + route, { title: route });
});
module.exports = router;