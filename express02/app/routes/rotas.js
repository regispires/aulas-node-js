// rotas
var controller = require('../controllers/contato_controller')();

module.exports = function(app) {
	app.get('/', controller.home);
	app.get('/contatos', controller.contatos);
	app.post('/contatos', controller.adiciona);
}

