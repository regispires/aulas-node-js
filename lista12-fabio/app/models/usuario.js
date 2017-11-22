var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
	    usuario: { 
	      type: String, 
	      required: true
	    }, 
	    senha: {
	      type: String, 
	      required: true
	    }
	}
	); 
	return mongoose.model('Usuario', schema);

};
