var model_contatos = require('../models/contatos');

var controller = {};

module.exports = function() {
	var contatos = model_contatos();

	controller.home = function(req, res) {
		res.render('index', 
			{ cabecalho: 'UFC Quixadá',
			  contacts: contatos 
			}
		);
	};

	controller.contatos = function(req,res) {
		res.json(contatos);
	};

	controller.adiciona = function(req, res) {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = { nome: nome1, email: email1 };
		console.log('adicionar: ' + pessoa);
		contatos.push(pessoa);
		//res.json(contatos) ;
		res.redirect('/') ;
	};

	return controller;
};



