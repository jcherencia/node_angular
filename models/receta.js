var Schema = require('mongoose').Schema

var recipe_schema = new Schema({
	nombre		: String
});

module.exports = recipe_schema;



//GET - Return all recipes in the DB
exports.findAllRecipes = function(req, res) {
	Recipe.find(function(err, recetas) {
		if(!err) {
			res.send(recetas);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//GET - Return a Recipe with specified ID
exports.recipefindById = function(req, res) {
	Recipe.findById(req.param.id, function(err, recipe) {
		if(!err) {
			res.send(recipe);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};


//POST - Insert a new Recipe in the DB
exports.addRecipe = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var recipe = new Recipe({
		nombre:    req.body.nombre,
		year:     req.body.year  
	});

	recipe.save(function(err) {
		if(!err) {
			console.log('Created');
		} else {
			console.log('ERROR: ' + err);
		}
	});

	res.send(recipe);
};


//PUT - Update a register already exists
exports.updateRecipe = function(req, res) {
	Recipe.findById(req.params.id, function(err, recipe) {
		recipe.nombre   = req.body.nombre;

		recipe.save(function(err) {
			if(!err) {
				console.log('Updated');
			} else {
				console.log('ERROR: ' + err);
			}

			res.send(recipe);
		});
	});
}

//DELETE - Delete a Recipe with specified ID
exports.deleteRecipe = function(req, res) {
	Recipe.findById(req.params.id, function(err, recipe) {
		recipe.remove(function(err) {
			if(!err) {
				console.log('Removed');
			} else {
				console.log('ERROR: ' + err);
			}
		})
	});
}