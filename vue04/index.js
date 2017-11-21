// carregamento de módulos
var app = require('./config/express')();

require('./config/database')('mongodb://localhost/agenda');

// inicialização do servidor
app.listen(app.get('port'), function() {
	console.log('Servidor funcionando na porta ' + app.get('port'));
});
