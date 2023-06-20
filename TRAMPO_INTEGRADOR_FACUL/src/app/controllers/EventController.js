const express = require('express')
const EventRepository = require('../models/EventRepository')

    const store = async(req, res) => {                         
        try{
        const events = req.body;                                
        const row = await EventRepository.create(events);      
        res.json(events);    
        }                                       
        catch (error) {
            res.json(500)
        }    
    }

    const index = async (req, res) =>{
        const row = await EventRepository.findAll();
        res.json(row);
    }

    const show = async(req, res) => {
        const id = req.params.id;
        const row = await EventRepository.findById(id);
        res.json(row);
    }

    const update = async(req, res) =>{
        const events = req.body;
        const id = req.params.id;
        const row = await EventRepository.update(events, id);
        res.json(row);
    }

    const deleteevents = async(req, res) => {
        const id = req.params.id;
        const row = await EventRepository.deleteevents(id);
        res.json(row);
    }



    

// Exporta as funções do controlador de usuário para serem utilizadas em outros arquivos como a de rota ou a controller
module.exports = { store, index, show, update, deleteevents }
