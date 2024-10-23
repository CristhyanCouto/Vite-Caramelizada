const express = require('express');
const router = express.Router();

//Table Name (games)
const { games } = require('../models');

//Get request to get all games
router.get('/', async (req, res) => {
    const listOfGames = await games.findAll();
    res.json(listOfGames);
});

//Get request to get a game by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const game = await games.findByPk(id);
    res.json(game);
});

//Post request to create a new record in the games table
router.post('/', async (req, res) => {
    const game = req.body;
    await games.create(game);
    res.json(game);
});

module.exports = router;