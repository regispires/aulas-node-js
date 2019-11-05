var model_contatos = require('../models/contatos');

var controller = {};

module.exports = function() {
	var contatos = model_contatos();
	var contato_id = 1;

	controller.novo = function(req, res) {
		var nome1 = req.body.nome;
		var email1 = req.body.email;
		var pessoa = { _id: contato_id++, nome: nome1, email: email1 };
		console.log('adicionar: ' + pessoa);
		contatos.push(pessoa);
		//res.json(contatos) ;
		res.json({ "status": "OK"}) ;
	};

	controller.atualiza_salva = function(req, res) {
		var id1 = req.body.id;
		var nome1 = req.body.nome;
		var email1 = req.body.email;

		contatos[id1] = { nome: nome1, email: email1 };

		res.redirect('/') ;
	};

	controller.deleta = function(req, res) {
		var pos = -1;
		id = parseInt(req.params.id);
		console.log("id: " + id);
		console.log("type id: " + typeof(id));
		var deleted = false;
		for (var i=0; i<contatos.length; i++) {
			console.log("contato_id: " + contatos[i]._id);
			console.log("type contato_id: " + typeof(contato_id));
			if (contatos[i]._id === id) {
				contatos.splice(i, 1);
				deleted = true;
				break;
			}
		} 
		if (deleted)
			res.json(contatos);
		else {
			res.json({ "status": "Could not find element to delete with _id:" + id});
		}

	};

	controller.contatos = function(req,res) {
		res.json(contatos);
	};

	return controller;
};
