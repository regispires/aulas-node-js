
module.exports = function(app) {

	var Contato = app.models.contato;

	var hash = require('object-hash');

	var controller = {};

	controller.home = function(req, res) {	

		app.controllers.login.autoriza(req, res, function() {
			console.log("to aqui")
			var c = req.cookies['contador'];
			var c2 = req.session.contador
			c2++;
			req.session.contador = c2;
			 console.log(c);
			  if (c == undefined) {
			  	 c = 1;
			  } else {
			  	 c++;
			  }
			res.cookie('contador', c);
			Contato.find(function (err, contatos) {
				console.log(contatos);
				if (err) return console.error(err);
				res.render('index', { cabecalho: 'UFC Quixadá', contatos: contatos, id:null });
			});
		});
	}
	controller.contador = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
			c = req.cookies['contador'];
			c2 = req.session.contador;
			res.json({contador: c,contador2: c2});
		});
	};

	controller.novo_form = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
			res.render('contato_novo', { contatos: null });
		});
	};

	controller.novo_salva = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = new Contato({ nome: nome1, email: email1 });
		console.log('adicionar: ' + pessoa);
		pessoa.save(function(err) {
				if (err) {
					console.log(err);
					res.json({error:"Não foi possivel cadastrar"});
				} else {
				controller.contatos(req,res);
				}
			});
		});
	};

	controller.atualiza_form = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
			id = req.params.id;
			Contato.findById(id,function (err, contatos) {
				if (err) return console.error(err);
				res.json(contatos);
			});
		});
		
	};

	controller.atualiza_salva = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
			var id1 = req.body.id;
			var nome1 = req.body.nome;
			var email1 = req.body.email;
			console.log(id1,nome1,email1)
			Contato.findByIdAndUpdate(id1,{$set:{ nome: nome1, email: email1 }},function(err){
				if (err) return console.error(err);
				controller.contatos(req,res);
			});
		});
	};

	controller.deleta = function(req, res) {
		app.controllers.login.autoriza(req, res, function() {
		id = req.params.id;
		Contato.remove({_id:id},function(err){
			if (err) return console.error(err);
			controller.contatos(req,res);
		});
		});
	};

	controller.contatos = function(req,res) {
		app.controllers.login.autoriza(req, res, function() {
			Contato.find(function (err, contatos) {
				if (err) return console.error(err);
				res.json(contatos);
			});
		});
	};

	return controller;
};
