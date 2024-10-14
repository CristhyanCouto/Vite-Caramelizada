const express = require('express');
const router = express.Router();

//Table Name (writers)
const { writers } = require('../models');

//Get request to get all writers
router.get('/', async (req, res) => {
    const listOfWriters = await writers.findAll();
    res.json(listOfWriters);
});

//Get request to get a writer by id
router.get('/:idwriter', async (req, res) => {
    const id = req.params.idwriter;
    const writer = await writers.findByPk(id);
    res.json(writer);
});

//Post request to create a new record in the writers table
router.post('/', async (req, res) => {
    const writer = req.body;
    await writers.create(writer);
    res.json(writer);
});

module.exports = router;