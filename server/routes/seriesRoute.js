const express = require('express');
const router = express.Router();

//Table Name (series)
const { series } = require('../models');

//Get request to get all series
router.get('/', async (req, res) => {
    const listOfSeries = await series.findAll();
    res.json(listOfSeries);
});

//Get request to get a series by id
router.get('/:id', async (req, res) => {
    const id = req.params.idserie;
    const seriesRecord = await series.findByPk(id);
    if(seriesRecord) {
        res.json(seriesRecord);
    } else {
        res.status(404).send('Series not found');
    }
});

//Post request to create a new record in the series table
router.post('/', async (req, res) => {
    const seriesRecord = req.body;
    await series.create(seriesRecord);
    res.json(seriesRecord);
});

module.exports = router;