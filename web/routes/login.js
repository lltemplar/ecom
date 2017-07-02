var express = require('express');
var router = express.Router();
var request = require('../lib/request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function (req, res, next) {
  var userName = req.body.userName;
  var password = req.body.password;
  console.log("userName = ", userName, "password = ", password);
  request.post('/api/v1/member/login', {
    body: {
      userName: req.body.userName,
      password: req.body.password
    }
  }, function (e) {
    console.log(JSON.stringify(e))
    if (e.data && e.data.status == 'Success') {       
      // set session in response
      req.session.regenerate(function (err) {
        if (err) {
          res.render('login', { title: 'Login', errorMsg: e.data.msg || 'Invalid userName or password' });
        } else {
          req.session.user = e.data.data;
          console.log("req.query is",JSON.stringify(req.originalUrl));
          var url = req.query['redirectUrl'];
          console.log("login redirect url is",url);
          // redirect to home page     
          res.redirect(url||'/');
        }
      });

    } else {
      res.render('login', { title: 'Login', errorMsg: e.data.msg || 'Invalid userName or password' });
    }
  });


});


module.exports = router;
