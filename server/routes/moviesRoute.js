const express = require('express');
const router = express.Router();

//Table Name (movies)
const { movies } = require('../models');

//Get request to get all movies
router.get('/', async (req, res) => {
    const listOfMovies = await movies.findAll();
    res.json(listOfMovies);
});

//Get request to get a movie by id
router.get('/:idmovie', async (req, res) => {
    const id = req.params.idmovie;
    const movie = await movies.findByPk(id);
    res.json(movie);
});

//Post request to create a new record in the movies table
router.post('/', async (req, res) => {
    const movie = req.body;
    await movies.create(movie);
    res.json(movie);
});

module.exports = router;