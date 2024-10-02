const express = require('express');
const router = express.Router();

//Table Name (games)
const { games } = require('../models');

//Get request to get all games
router.get('/', async (req, res) => {
    const listOfGames = await games.findAll();
    res.json(listOfGames);
});

//Post request to create a new record in the games table
router.post('/', async (req, res) => {
    const game = req.body;
    await games.create(game);
    res.json(game);
});

module.exports = router;