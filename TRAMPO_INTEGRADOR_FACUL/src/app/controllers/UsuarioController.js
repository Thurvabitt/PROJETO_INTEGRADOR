const express = require('express')
const UsuarioRepository = require('../models/UsuarioRepository')




// criar usuario
const store = async (req, res) => {
    try {
        const usuario = req.body;                                 // Extrai o objeto do usuário do corpo da requisição (req.body)
        const row = await UsuarioRepository.create(usuario);      // Chama a função create do UsuarioRepository para criar o usuário no banco de dados
        res.json(usuario);

    } catch (error) {
        res.json(500)
    }               
}

// listar os cabeça
const index = async (req, res) => {
    const row = await UsuarioRepository.findAll();
    res.json(row);
}

// buscar cabeça por id
const show = async (req, res) => {
    const id = req.params.id;
    const row = await UsuarioRepository.findById(id);
    res.json(row);
}

// atualizar 
const update = async (req, res) => {
    const usuario = req.body;
    const id = req.params.id;
    const row = await UsuarioRepository.update(usuario, id);
    res.json(row);
}

// deletar
const deleteUsuario = async (req, res) => {
    const id = req.params.id;
    const row = await UsuarioRepository.deleteUsuario(id);
    res.json(row);
}




// tentativa falha de cadastrar novo usuario
const cadastrarUsuario = async (req, res) => {                   // Recebe a requisição (req) e a resposta (res)
    const { nome, email, senha } = req.body;                     // Extrai as propriedades nome, email e senha do corpo da requisição (req.body)
    const novoUsuario = { nome, email, senha };                  // Cria um novo objeto de usuário com as propriedades extraídas

    try {
        const row = await UsuarioRepository.create(novoUsuario); // Tenta chamar a função create do UsuarioRepository para criar o novo usuário no banco de dados
        res.json(row);
    } catch (error) {
        console.log('Erro ao cadastrar novo usuário: ', error); //erro exibido ao usuário.
        res.status(500).send('Erro ao cadastrar usuário'); // linha de erro que apenas os desenvolvedores(eu memo) podem ver, fica registrado no console do sistema

    }
}

//exportei as função do controller pra ser usado nas rota
module.exports = { store, index, show, update, deleteUsuario, cadastrarUsuario }
