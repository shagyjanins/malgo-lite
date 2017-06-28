/* Requires */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
cons.dust.helpers = require("dustjs-helpers");

/* Routes */
var index = require('./routes/index');
var users = require('./routes/users');

/* Intatiate express */
var app = express();

/*
Define template_engine and domain name here
 */
var template_engine = 'dust',
    domain = 'localhost';


if (template_engine === 'dust') {
    var dust = require('dustjs-linkedin');
    app.engine('dust', cons.dust);

} else if (template_engine === 'jade') {
    app.set('view engine', 'jade');
}

// App configuration
  app.set('template_engine', template_engine);
  app.set('domain', domain);
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views/' + template_engine );
  app.set('view engine', template_engine);
  app.use(require('less-middleware')(__dirname + '/public'));

app.locals.inspect = require('util').inspect;

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Define routes here */
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
