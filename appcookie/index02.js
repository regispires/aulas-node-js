var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies);
  var c = req.cookies['contador'];
  console.log(c);
  if (c == undefined) {
  	 c = 1;
  } else {
  	 c++;
  }
  res.cookie('contador', c);
  res.send('OK');
});

app.get('/contador', function(req, res) {
	c = req.cookies['contador'];
	res.send('contador: ' + c);
});
 
app.listen(3000);
