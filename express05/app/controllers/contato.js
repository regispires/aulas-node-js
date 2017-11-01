
module.exports = function(app) {

	console.log('model: ' + app);

	var Contato = app.models.contato;

	var controller = {};

	controller.home = function(req, res) {
		console.log('controller home');
		Contato.find(function (err, contatos) {
			if (err) return console.error(err);
			res.render('index', { cabecalho: 'UFC Quixadá', contacts: contatos });
		});
	}

	controller.novo_form = function(req, res) {
		res.render('contato_novo', { contacts: null });
	};

	controller.novo_salva = function(req, res) {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = new Contato({ nome: nome1, email: email1 });
		console.log('adicionar: ' + pessoa);
		pessoa.save(function(err) {
				if (err) {
					console.log(err);
					res.redirect('/contatos/novo');
				} else {
					res.redirect('/');
				}
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
