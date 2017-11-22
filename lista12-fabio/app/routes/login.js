// rotas
module.exports = function(app) {
	var controller = app.controllers.login;

	app.get('/login', controller.login);

	app.post('/login', controller.processa_login);

	app.get('/logout', controller.logout);

}