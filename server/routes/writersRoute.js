const express = require('express');
const router = express.Router();

//Table Name (writers)
const { writers } = require('../models');

//Get request to get all writers
router.get('/', async (req, res) => {
    const listOfWriters = await writers.findAll();
    res.json(listOfWriters);
});

//Post request to create a new record in the writers table
router.post('/', async (req, res) => {
    const writer = req.body;
    await writers.create(writer);
    res.json(writer);
});

module.exports = router;