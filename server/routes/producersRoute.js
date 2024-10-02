const express = require('express');
const router = express.Router();

//Table Name (producers)
const { producers } = require('../models');

//Get request to get all producers
router.get('/', async (req, res) => {
    const listOfProducers = await producers.findAll();
    res.json(listOfProducers);
});

//Post request to create a new record in the producers table
router.post('/', async (req, res) => {
    const producer = req.body;
    await producers.create(producer);
    res.json(producer);
});

module.exports = router;