var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/hero', function(req,res){
  res.send('soy la seccion hero')
})


app.get('/novedades', function(req,res){
  res.send('soy las novedades')
})

app.get('/historia', function(req,res){
  res.send('esta es nuestra historia')
})

app.get('/nosotros', function(req,res){
  res.send('estos somos nosotros')
})

app.get('/visitanos', function(req,res){
  res.send('Visitanos en nuestros locales')
})

app.get('/contacto', function(req,res){
  res.send('contactanos por estos medios')
})
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
