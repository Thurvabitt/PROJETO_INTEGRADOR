const express = require('express')
const EventRepository = require('../models/EventRepository')




    // criar favorito
    const store = async(req, res) => {                            // Recebe a requisição (req) e a resposta (res)
        try{
        const events = req.body;                                 // Extrai o objeto do usuário do corpo da requisição (req.body)
        const row = await EventRepository.create(events);      // Chama a função create do UsuarioRepository para criar o usuário no banco de dados
        res.json(events);    
        }                                        // Retorna a resposta como um objeto JSON contendo os dados do usuário criado
        catch (error) {
            res.json(500)
        }    
    }

    // listar favorito
    const index = async (req, res) =>{
        const row = await EventRepository.findAll();
        res.json(row);
    }

    // buscar favorito por id
    const show = async(req, res) => {
        const id = req.params.id;
        const row = await EventRepository.findById(id);
        res.json(row);
    }

    // atualizar favorito
    const update = async(req, res) =>{
        const events = req.body;
        const id = req.params.id;
        const row = await EventRepository.update(events, id);
        res.json(row);
    }

    // deletar favorito
    const deleteevents = async(req, res) => {
        const id = req.params.id;
        const row = await EventRepository.deleteevents(id);
        res.json(row);
    }



    

// Exporta as funções do controlador de usuário para serem utilizadas em outros arquivos como a de rota ou a controller
module.exports = { store, index, show, update, deleteevents }
