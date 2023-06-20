// Importando o framework Express e o controlador de EVENTOS
const express = require('express')
const EventController = require('../controllers/EventController')
const EventRouter = express.Router()

//Adicionar
EventRouter.post('/adicionarEvento', (req, res) => EventController.store(req, res));

//listar
EventRouter.get('/listarEvento', EventController.index);

//buscar pelo ID
EventRouter.get('/buscarPorId/:id', EventController.show);

//atualizar
EventRouter.put('/atualizarEvento/:id', EventController.update);

//deletar pelo ID
EventRouter.delete('/deletarEvento/:id', EventController.deleteevents);

module.exports = EventRouter
