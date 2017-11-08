var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies);
  res.cookie('id', 1);
  res.cookie('user', 'Regis');
  res.send('OK');
});
 
app.listen(3000);
