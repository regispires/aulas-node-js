var express = require('express');
var app = express();

app.set('port', 3000);

app.use(express.static('./public'));

// rotas
app.get('/hello', function(req, res) {
        res.json({ texto: 'ola mundo' });
});

app.listen(app.get('port'), function() {
        console.log('Servidor funcionando na porta ' + app.get('port'));
});