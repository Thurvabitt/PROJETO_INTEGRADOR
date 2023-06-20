// Importando o framework Express e o controlador de usuário
const express = require('express')
const usuarioController = require('../controllers/UsuarioController')
const router = express.Router()

//Adicionar Usuario
router.post('/adicionarUsuario', (req, res) => usuarioController.store(req, res));

//listar usuarios
router.get('/listarUsuario', usuarioController.index);

//buscar usuario por ID
router.get('/buscarPorId/:id', usuarioController.show);

//atualizar Usuario
router.put('/atualizarUsuario/:id', usuarioController.update);

//deletar usuario por ID
router.delete('/deletarUsuario/:id', usuarioController.deleteUsuario);

// Exporta as rotas
module.exports = router