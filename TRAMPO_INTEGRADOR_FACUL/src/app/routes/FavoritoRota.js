const express = require('express')
const FavoritoController = require('../controllers/FavoritoController')
const FavRouter = express.Router()

//Add
FavRouter.post('/adicionarFavorito', (req, res) => {FavoritoController.store(req, res); console.log('eu chupo pito')});

//list
FavRouter.get('/listarFavorito', FavoritoController.index);

//search
FavRouter.get('/buscarPorId/:id', FavoritoController.show);

//att
FavRouter.put('/atualizarFavorito/:id', FavoritoController.update);

//del
FavRouter.delete('/deletarFavorito/:id', FavoritoController.deleteFavorito);

module.exports = FavRouter
