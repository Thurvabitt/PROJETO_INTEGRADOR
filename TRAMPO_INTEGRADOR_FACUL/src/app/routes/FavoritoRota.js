// Importando o framework Express e o controlador de usuário
const express = require('express')
const FavoritoController = require('../controllers/FavoritoController')
const FavRouter = express.Router()

//Adicionar Usuario
FavRouter.post('/adicionarFavorito', (req, res) => {FavoritoController.store(req, res); console.log('eu chupo pito')});

//listar usuarios
FavRouter.get('/listarFavorito', FavoritoController.index);

//buscar usuario por ID
FavRouter.get('/buscarPorId/:id', FavoritoController.show);

//atualizar Usuario
FavRouter.put('/atualizarFavorito/:id', FavoritoController.update);

//deletar usuario por ID
FavRouter.delete('/deletarFavorito/:id', FavoritoController.deleteFavorito);

// Exporta as rotas
module.exports = FavRouter