const express = require('express')
const FavoritoRepository = require('../models/FavoritoRepository')




    // criar favorito
    const store = async(req, res) => {                            // Recebe a requisição (req) e a resposta (res)
        const favorito = req.body;                                 // Extrai o objeto do usuário do corpo da requisição (req.body)
        const row = await FavoritoRepository.create(favorito);      // Chama a função create do UsuarioRepository para criar o usuário no banco de dados
        res.json(row);                                            // Retorna a resposta como um objeto JSON contendo os dados do usuário criado

    }

    // listar favorito
    const index = async (req, res) =>{
        const row = await FavoritoRepository.findAll();
        res.json(row);
    }

    // buscar favorito por id
    const show = async(req, res) => {
        const id = req.params.id;
        const row = await FavoritoRepository.findById(id);
        res.json(row);
    }

    // atualizar favorito
    const update = async(req, res) =>{
        const favorito = req.body;
        const id = req.params.id;
        const row = await FavoritoRepository.update(favorito, id);
        res.json(row);
    }

    // deletar favorito
    const deleteFavorito = async(req, res) => {
        const id = req.params.id;
        const row = await FavoritoRepository.deletefavorito(id);
        res.json(row);
    }



    
    // cadastrar novo favorito
    const cadastrarFavorito = async(req, res) => {       // Recebe a requisição (req) e a resposta (res)
        const { nome } = req.body;        // Extrai as propriedades nome, email e senha do corpo da requisição (req.body)
        const novoFavorito = { nome };     // Cria um novo objeto de favorito com as propriedades extraídas

        try {
            const row = await FavoritoRepository.create(novoFavorito); // Tenta chamar a função create do FavoritoRepository para criar o novo favorito no banco de dados
            res.json(row);
        } catch (error) {
            console.log('Erro ao cadastrar um novo favorito: ', error); //erro exibido ao favorito.
            res.status(500).send('Erro ao cadastrar favorito'); // linha de erro que apenas os desenvolvedores(eu memo) podem ver, fica registrado no console do sistema

        }
    }

// Exporta as funções do controlador de usuário para serem utilizadas em outros arquivos como a de rota ou a controller
module.exports = { store, index, show, update, deleteFavorito, cadastrarFavorito }
