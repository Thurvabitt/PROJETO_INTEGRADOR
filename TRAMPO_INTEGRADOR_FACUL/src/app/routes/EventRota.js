// Importando o framework Express e o controlador de EVENTOS
const express = require('express')
const EventController = require('../controllers/EventController')
const EventRouter = express.Router()

//Adicionar EVENTOS
EventRouter.post('/adicionarEvento', (req, res) => EventController.store(req, res));

//listar EVENTOS
EventRouter.get('/listarEvento', EventController.index);

//buscar EVENTOS por ID
EventRouter.get('/buscarPorId/:id', EventController.show);

//atualizar EVENTOS
EventRouter.put('/atualizarEvento/:id', EventController.update);

//deletar EVENTOS por ID
EventRouter.delete('/deletarEvento/:id', EventController.deleteevents);

// Exporta as rotas
module.exports = EventRouter