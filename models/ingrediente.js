var Schema = require('mongoose').Schema

var Ingrediente = new Schema({
	nombre		: String
});

module.exports = Ingrediente;


//GET - Return all ingredientes in the DB
exports.findAllIngredientes = function(req, res) {
	Ingrediente.find(function(err, recetas) {
		if(!err) {
			res.send(recetas);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//GET - Return a Ingrediente with specified ID
exports.ingredientefindById = function(req, res) {
	Ingrediente.findById(req.param.id, function(err, ingrediente) {
		if(!err) {
			res.send(ingrediente);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};


//POST - Insert a new Ingrediente in the DB
exports.addIngrediente = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var ingrediente = new Ingrediente({
		nombre:    req.body.nombre,
		year:     req.body.year  
	});

	ingrediente.save(function(err) {
		if(!err) {
			console.log('Created');
		} else {
			console.log('ERROR: ' + err);
		}
	});

	res.send(ingrediente);
};


//PUT - Update a register already exists
exports.updateIngrediente = function(req, res) {
	Ingrediente.findById(req.params.id, function(err, ingrediente) {
		ingrediente.nombre   = req.body.nombre;

		ingrediente.save(function(err) {
			if(!err) {
				console.log('Updated');
			} else {
				console.log('ERROR: ' + err);
			}

			res.send(ingrediente);
		});
	});
}

//DELETE - Delete a Ingrediente with specified ID
exports.deleteIngrediente = function(req, res) {
	Ingrediente.findById(req.params.id, function(err, ingrediente) {
		ingrediente.remove(function(err) {
			if(!err) {
				console.log('Removed');
			} else {
				console.log('ERROR: ' + err);
			}
		})
	});
}