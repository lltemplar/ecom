var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config.js');

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

//define whole variables
app.locals['version'] = config.version || '0.0.1';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* route */
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

/* rest api */
app.use('/api/v1/register', require('./routes/register'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  if (err.status == 404) {
    res.status(404);    
    res.render('404');
  } else {
    res.status(err.status || 500);
    console.log(JSON.stringify(err));
    res.render('500');
  }

});



module.exports = app;
