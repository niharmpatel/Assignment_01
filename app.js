//- Author-name- Nihar Patel
//- File-name-app.js 
//- File-description- This is an JavaScript file used to operate different functions
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./model/user');
var localStrategy = require('passport-local').Strategy

mongoose.connect('mongodb+srv://test:test@cluster0-dbiu2.mongodb.net/test?retryWrites=true&w=majority', {cuseNewUrlParser: true, useUnifiedTopology: true  });


var db = mongoose.connection;
db.on('error', () => console.log("There is an error"));
db.once('open', () => console.log("connected with Mongoose"));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({
secret: 'wserdtfyguihjokpijuhytfrdxfcgnjklojuhygtfrdxfcghjikojiuhytfrdxcghjikojiuhygtfcdxgyuhijytfrxfdgcjhk',
resave: false,
saveUninitialized: true 
}));

app.use(passport.initialize());
app.use(passport.session());



passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) =>{
  res.locals.isAuthentictaed = req.isAuthenticated();

  next();
});

app.use((req, res, next) => {
  console.log(req.session);
  next();
});



app.use ('/', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
