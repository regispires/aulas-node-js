// carregamento de módulos
var express = require('express');
var app = express();

// modelo
var contatos = [
	{nome: 'João', email: 'joao@gmail.com'},
	{nome: 'Maria', email: 'maria@gmail.com'},
	{nome: 'José', email: 'jose@gmail.com'}
]

// configurações
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

// rotas
app.get('/', function(req, res) {
	res.send('ola mundo');
});

app.get('/ufc', function(req, res) {
	res.render('index', 
		{ cabecalho: 'UFC Quixadá',
		  contacts: contatos 
		}
	);
});

app.get('/contatos', function(req,res) {
	res.json(contatos);
});

// inicialização do servidor
app.listen(app.get('port'), function() {
	console.log('Servidor funcionando na porta ' + app.get('port'));
});
