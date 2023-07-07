var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var visitorindexRouter = require('./routes/visitorindex');
var visitschedRouter = require('./routes/visitsched');
var addinmateRouter = require('./routes/addinmate');
var deleteRouter = require('./routes/delete');
var visitviewRouter = require('./routes/visitview');
var viewRouter = require('./routes/view');
var editRouter = require('./routes/edit');

var app = express();
const PORT = process.env.PORT ||5000;

app.listen(PORT, console.log(
    `Server is running http://localhost:${PORT}/`
));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', loginRouter);
app.use('/', registerRouter);
app.use('/', visitorindexRouter);
app.use('/', visitschedRouter);
app.use('/', addinmateRouter);
app.use('/', deleteRouter);
app.use('/', viewRouter);
app.use('/', editRouter);
app.use('/', visitviewRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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