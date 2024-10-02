const express = require('express');
const router = express.Router();

//Table Name (movies)
const { movies } = require('../models');

//Get request to get all movies
router.get('/', async (req, res) => {
    const listOfMovies = await movies.findAll();
    res.json(listOfMovies);
});

//Post request to create a new record in the movies table
router.post('/', async (req, res) => {
    const movie = req.body;
    await movies.create(movie);
    res.json(movie);
});

module.exports = router;