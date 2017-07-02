var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var redis = require('redis');
var RedisStore = require('connect-redis')(expressSession);

var config = require('./config.js');

// 创建Redis客户端
var redisClient = redis.createClient(6379, '127.0.0.1');
// 配置路由信息
var urls = [
  {
    url: '/',
    route: './routes/index',
    needLogin: true
  }, {
    url: '/register',
    route: './routes/register'
  }, {
    url: '/login',
    route: './routes/login'    
  }, {
    url: '/personcenter',
    route: './routes/personcenter'    
  }];

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

// 设置Express的Session存储中间件
app.use(expressSession({
  store: new RedisStore({ client: redisClient }),  // redis 存储session
  secret: 'password', // 用来对session id相关的cookie进行签名 
  resave: false,  // 是否每次都重新保存会话，建议false
  saveUninitialized: false // 是否自动保存未初始化的会话，建议false
}));

// 登陆拦截
app.use(function (req, res, next) {
  urls.forEach(function (item, index) {
    if (req.url === item.url && item.needLogin && !req.session.user) {
      // 未登录，则重定向到登陆页面
      return res.redirect('/login?redirectUrl=' + req.originalUrl);
    }
  });
  next();
});

/* route */
//app.use('/', require('./routes/index'));
urls.forEach(function (i, v) {
  app.use(i.url, require(i.route));
});
// app.use('/index', require('./routes/index'));
// app.use('/register', require('./routes/register'));
// app.use('/login', require('./routes/login'));

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
