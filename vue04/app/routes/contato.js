// rotas
module.exports = function(app) {
	var controller = app.controllers.contato;

	app.get('/', controller.home);

	app.get('/contatos', controller.contatos);

	app.delete('/contatos/:id', controller.deleta);


	app.get('/contatos/novo', controller.novo_form);
	app.post('/contatos/novo', controller.novo_salva);

	app.get('/contatos/atualiza/:id', controller.atualiza_form);
	app.post('/contatos/atualiza', controller.atualiza_salva);

	app.get('/contatos/deleta/:id', controller.deleta);
}