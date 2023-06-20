const express = require('express')
const FavoritoRepository = require('../models/FavoritoRepository')




    // add favorito
    const store = async(req, res) => {                           
        const favorito = req.body;                                 
        const row = await FavoritoRepository.create(favorito);     
        res.json(row);                                           

    }

    // list favorito
    const index = async (req, res) =>{
        const row = await FavoritoRepository.findAll();
        res.json(row);
    }

    // Search favoritos ID
    const show = async(req, res) => {
        const id = req.params.id;
        const row = await FavoritoRepository.findById(id);
        res.json(row);
    }

    // att favorito
    const update = async(req, res) =>{
        const favorito = req.body;
        const id = req.params.id;
        const row = await FavoritoRepository.update(favorito, id);
        res.json(row);
    }

    // del favorito
    const deleteFavorito = async(req, res) => {
        const id = req.params.id;
        const row = await FavoritoRepository.deletefavorito(id);
        res.json(row);
    }



    
    // cadastrar novo favorito
    const cadastrarFavorito = async(req, res) => {      
        const { nome } = req.body;       
        const novoFavorito = { nome };    

        try {
            const row = await FavoritoRepository.create(novoFavorito); 
            res.json(row);
        } catch (error) {
            console.log('Erro ao cadastrar um novo favorito: ', error);
            res.status(500).send('Erro ao cadastrar favorito'); 

        }
    }

module.exports = { store, index, show, update, deleteFavorito, cadastrarFavorito }
