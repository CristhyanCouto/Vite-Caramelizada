const express = require('express');
const router = express.Router();

//Table Name (publisher_games)
const { publisher_games } = require('../models');

//Get request to get all records in the publisher_games table
router.get('/', async (req, res) => {
    const listOfPublisherGames = await publisher_games.findAll();
    res.json(listOfPublisherGames);
});

//Get request to get a record by id in the publisher_games table
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const publisherGame = await publisher_games.findByPk(id);
    res.json(publisherGame);
});

//Post request to create a new record in the publisher_games table
router.post('/', async (req, res) => {
    const publisherGame = req.body;
    await publisher_games.create(publisherGame);
    res.json(publisherGame);
});

module.exports = router;