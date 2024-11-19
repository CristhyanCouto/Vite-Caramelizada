const express = require('express');
const router = express.Router();

//Table Name (animes)
const { animes } = require('../models');

//Get request to get all animes
router.get('/', async (req, res) => {
    const listOfAnimes = await animes.findAll();
    res.json(listOfAnimes);
});

//Get request to get a specific anime by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const anime = await animes.findByPk(id);
    res.json(anime);
});

//Post request to create a new record in the animes table
router.post('/', async (req, res) => {
    const anime = req.body;
    await animes.create(anime);
    res.json(anime);
});

module.exports = router;