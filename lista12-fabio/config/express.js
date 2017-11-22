var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')

module.exports = function() {
	var app = express();
		
	// configurações
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middleware
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static('./public'));
	app.use(cookieParser());

	app.use(session({
  		secret: 'keyboard cat',
  		resave: true,
  		saveUninitialized: true
	}));

	consign({cwd: 'app'})
		.include('models')
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};
