module.exports = function(app) {

	var hash = require('object-hash');

	var Usuario = app.models.usuario;

	var controller = {};

	controller.login = function(req, res) {
		res.render('login');	
	}

	controller.logout = function(req, res) {
		req.session.destroy();
		res.redirect('/login');
	}

	controller.processa_login = function(req, res) {
		console.log(req.body.usuario, hash(req.body.senha));
		Usuario.findOne({usuario:req.body.usuario, senha: hash(req.body.senha) }, function(err, usuario){
			if (err) return handleError(err);
			if (usuario){
				req.session.user = usuario._id;
				req.session.contador = 0;
				res.redirect('/');
			}else{
				res.redirect('/login');
			}
		});
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