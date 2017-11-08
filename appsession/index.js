var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(cookieParser()); 
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.get('/', function(req, res) {
  console.log('cookies: ' + req.cookies);
  console.log('session: ' + req.session);
  console.log('user (session1): ' + req.session.user);
  res.send('OK');
});

app.get('/u/:user', function(req, res) {
	var user = req.params.user;
	req.session.user = user;
	res.redirect('/');
});


app.listen(3000);
