var Schema = require('mongoose').Schema

var Pedido = new Schema({
	nombre		: String
});

module.exports = Pedido;




//GET - Return all pedidos in the DB
exports.findAllPedidos = function(req, res) {
	Pedido.find(function(err, recetas) {
		if(!err) {
			res.send(recetas);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};

//GET - Return a Pedido with specified ID
exports.pedidofindById = function(req, res) {
	Pedido.findById(req.param.id, function(err, pedido) {
		if(!err) {
			res.send(pedido);
		} else {
			console.log('ERROR: ' + err);
		}
	});
};


//POST - Insert a new Pedido in the DB
exports.addPedido = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var pedido = new Pedido({
		nombre:    req.body.nombre
	});

	pedido.save(function(err) {
		if(!err) {
			console.log('Created');
		} else {
			console.log('ERROR: ' + err);
		}
	});

	res.send(pedido);
};


//PUT - Update a register already exists
exports.updatePedido = function(req, res) {
	Pedido.findById(req.params.id, function(err, pedido) {
		pedido.nombre   = req.body.nombre;

		pedido.save(function(err) {
			if(!err) {
				console.log('Updated');
			} else {
				console.log('ERROR: ' + err);
			}

			res.send(pedido);
		});
	});
}

//DELETE - Delete a Pedido with specified ID
exports.deletePedido = function(req, res) {
	Pedido.findById(req.params.id, function(err, pedido) {
		pedido.remove(function(err) {
			if(!err) {
				console.log('Removed');
			} else {
				console.log('ERROR: ' + err);
			}
		})
	});
}