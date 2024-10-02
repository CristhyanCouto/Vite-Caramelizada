const express = require('express');
const router = express.Router();

//Table Name (seasons_series)
const { seasons_series } = require('../models');

//Get request to get all seasons_series
router.get('/', async (req, res) => {
    const listOfSeasonsSeries = await seasons_series.findAll();
    res.json(listOfSeasonsSeries);
});

//Post request to create a new record in the seasons_series table
router.post('/', async (req, res) => {
    const seasonsSeries = req.body;
    await seasons_series.create(seasonsSeries);
    res.json(seasonsSeries);
});

module.exports = router;