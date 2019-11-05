// rotas
var controller = require('../controllers/contato_controller')();

module.exports = function(app) {
	app.get('/contatos', controller.contatos);

	//app.get('/contatos/novo', controller.novo_form);
	app.post('/contatos', controller.novo);

	app.post('/contatos/atualiza', controller.atualiza_salva);

	app.delete('/contatos/:id', controller.deleta);
}