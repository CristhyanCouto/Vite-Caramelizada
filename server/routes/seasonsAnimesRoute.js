const express = require('express');
const router = express.Router();

//Table Name (seasons_animes)
const { seasons_animes } = require('../models');

//Get request to get all seasons_animes
router.get('/', async (req, res) => {
    const listOfSeasonsAnimes = await seasons_animes.findAll();
    res.json(listOfSeasonsAnimes);
});

//Get request to get a single record from the seasons_animes table
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const seasonsAnimes = await seasons_animes.findByPk(id);
    res.json(seasonsAnimes);
});

//Post request to create a new record in the seasons_animes table
router.post('/', async (req, res) => {
    const seasonsAnimes = req.body;
    await seasons_animes.create(seasonsAnimes);
    res.json(seasonsAnimes);
});

module.exports = router;