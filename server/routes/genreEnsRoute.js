const express = require('express');
const router = express.Router();

//Table Name (genre_ens)
const { genre_ens } = require('../models');

//Get request to get all genre_ens
router.get('/', async (req, res) => {
    const listOfGenreEns = await genre_ens.findAll();
    res.json(listOfGenreEns);
});

//Post request to create a new record in the genre_ens table
router.post('/', async (req, res) => {
    const genreEn = req.body;
    await genre_ens.create(genreEn);
    res.json(genreEn);
});

module.exports = router;