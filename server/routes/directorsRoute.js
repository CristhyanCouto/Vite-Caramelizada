const express = require('express');
const router = express.Router();

//Table Name (directors)
const { directors } = require('../models');

//Get request to get all directors
router.get('/', async (req, res) => {
    const listOfDirectors = await directors.findAll();
    res.json(listOfDirectors);
});

//Post request to create a new record in the directors table
router.post('/', async (req, res) => {
    const director = req.body;
    await directors.create(director);
    res.json(director);
});

module.exports = router;