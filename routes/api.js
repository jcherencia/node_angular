var Recipe 		= 	require('../models/receta.js'),
	User 		=	require('../models/user.js'),
	Pedido		=	require('../models/pedido.js'),
	Ingrediente	=	require('../models/ingrediente.js')

var app = require('../app');


/**********************/
/*******ROUTES*********/
/*********************/


/*******RECIPES******/
app.get('/api/recipes', Recipe.findAllRecipes);
app.get('/api/recipe/:id', Recipe.recipefindById);
app.post('/api/recipe', Recipe.addRecipe);
app.put('/api/recipe/:id', Recipe.updateRecipe);
app.del('/api/recipe/:id', Recipe.deleteRecipe);
app.get('/api/recipe/:type', Recipe.getTypeRecipe);

/*******USERS******/
app.get('/api/user', User.findAllUsers);
app.get('/api/user/:id', User.userfindById);
app.post('/api/user', User.addUser);
app.put('/api/user/:id', User.updateUser);
app.del('/api/user/:id', User.deleteUser);

/*******USERS******/
app.get('/api/pedido', Pedido.findAllPedidos);
app.get('/api/pedido/:id', Pedido.pedidofindById);
app.post('/api/pedido', Pedido.addPedido);
app.put('/api/pedido/:id', Pedido.updatePedido);
app.del('/api/pedido/:id', Pedido.deletePedido);

/*******USERS******/
app.get('/api/ingrediente', Ingrediente.findAllIngredientes);
app.get('/api/ingrediente/:id', Ingrediente.ingredientefindById);
app.post('/api/ingrediente', Ingrediente.addIngrediente);
app.put('/api/ingrediente/:id', Ingrediente.updateIngrediente);
app.del('/api/ingrediente/:id', Ingrediente.deleteIngrediente);
