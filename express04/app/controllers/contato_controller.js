var model = require('../models/contatos')();

var controller = {};

module.exports = function() {

	controller.home = function(req, res) {
		model.find(function(docs) {
			res.render('index', 
				{ cabecalho: 'UFC Quixadá',
				  contacts: docs 
				}
			);			
		});
	};

	controller.novo_form = function(req, res) {
		res.render('contato_novo', { contacts: null });
	};

	controller.novo_salva = function(req, res) {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = { nome: nome1, email: email1 };
		console.log('adicionar: ' + pessoa);
		model.insert(pessoa, function() {
			res.redirect('/') ;
		});
	};

	controller.atualiza_form = function(req, res) {
		id = req.params.id;
		res.render('contato_update', { contacts: contatos, id: id });
	};

	controller.atualiza_salva = function(req, res) {
		var id1 = req.body.id;
		var nome1 = req.body.nome;
		var email1 = req.body.email;

		contatos[id1] = { nome: nome1, email: email1 };

		res.redirect('/') ;
	};

	controller.deleta = function(req, res) {
		id = req.params.id;
		contatos.splice(id, 1);
		res.redirect('/') ;
	};

	controller.contatos = function(req,res) {
		res.json(contatos);
	};

	return controller;
};
