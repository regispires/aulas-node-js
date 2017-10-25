// modelo
var MongoClient = require('mongodb').MongoClient;

var model = {};

module.exports = function() {

	model.find = function(callback_function) {
		MongoClient.connect('mongodb://localhost:27017/agenda',
			function(erro, db) {
				if (erro) throw err;
				db.collection('contatos').find({}).toArray(
					function(erro, docs) {
						if (erro) throw err;
						console.log(docs);
						callback_function(docs);
					});
			}
		);
	}

	model.insert = function(pessoa, callback_function) {
		MongoClient.connect('mongodb://localhost:27017/agenda',
			function(erro, db) {
				if (erro) throw err;
				db.collection('contatos').insert(pessoa, 
					function(erro, docs) {
						if (erro) throw err;
						callback_function();
					});
			}
		);
	}


	return model;
};
