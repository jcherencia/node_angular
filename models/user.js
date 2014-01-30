var Schema = require('mongoose').Schema

var User = new Schema({
	nombre		: String
});

module.exports = User;


//GET - Return all recipes in the DB
exports.findAllUsers = function(req, res) {
	User.find(function(err, users) {
		if(!err) {
			res.send(users);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//GET - Return a User with specified ID
exports.userfindById = function(req, res) {
	User.findById(req.param.id, function(err, user) {
		if(!err) {
			res.send(user);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};


//POST - Insert a new User in the DB
exports.addRecipe = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var user = new User({
		nombre:    req.body.nombre
	});

	user.save(function(err) {
		if(!err) {
			console.log('Created');
		} else {
			console.log('ERROR: ' + err);
		}
	});

	res.send(user);
};


//PUT - Update a register already exists
exports.updateUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		user.nombre   = req.body.nombre;

		user.save(function(err) {
			if(!err) {
				console.log('Updated');
			} else {
				console.log('ERROR: ' + err);
			}

			res.send(user);
		});
	});
}

//DELETE - Delete a User with specified ID
exports.deleteUser = function(req, res) {
	User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(!err) {
				console.log('Removed');
			} else {
				console.log('ERROR: ' + err);
			}
		})
	});
}