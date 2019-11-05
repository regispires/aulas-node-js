var express = require('express');
var bodyParser = require('body-parser');
var rotas = require('../app/routes/rotas');
var cors = require('cors');

module.exports = function() {
	var app = express();
	app.use(bodyParser.json());
	 
	// configurações
	app.use(cors());
	app.set('port', 3333);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middleware
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(express.static('./public'));

	rotas(app);

	return app;
};
