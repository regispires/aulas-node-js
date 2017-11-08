module.exports = function(app) {

	var hash = require('object-hash');

	var controller = {};

	controller.login = function(req, res) {
		res.render('login');	
	}

	controller.logout = function(req, res) {
		req.session.destroy();
		res.redirect('/login');
	}

	controller.processa_login = function(req, res) {
		var usuario = req.body.usuario;
		var hash_senha = hash(req.body.senha);
		if (usuario == 'regis' && hash_senha == 'c365cb01c5b5595d0a330d97b025e3c4730823e2') {
			req.session.user = usuario;
			res.redirect('/');
		} else {
			res.redirect('/login');
		}
	};

	controller.autoriza = function(req, res, callback_function) {
		if (req.session.user == undefined) {
			req.session.destroy();
			res.redirect('/login');
		} else {
			callback_function();
		}
	}

	return controller;
};