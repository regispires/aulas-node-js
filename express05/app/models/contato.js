// modelo
console.log('carregando models/contato.js');

var mongoose = require('mongoose');

module.exports = function() {
	console.log('definição de modelo Contato.')
	var schema = mongoose.Schema({
	    nome: { 
	      type: String, 
	      required: true
	    }, 
	    email: {
	      type: String, 
	      required: true, 
	      index: {
	        unique: true
	      }
	    }
	}); 
	return mongoose.model('Contato', schema);

};
