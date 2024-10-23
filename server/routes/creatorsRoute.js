const express = require('express');
const router = express.Router();

//Table Name (creators)
const { creators } = require('../models');

//Get request to get all records in the creators table
router.get('/', async (req, res) => {
    const listOfCreators = await creators.findAll();
    res.json(listOfCreators);
});

//Get request to get a record by id in the creators table
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const creator = await creators.findByPk(id);
    res.json(creator);
});

//Post request to create a new record in the creators table
router.post('/', async (req, res) => {
    const creator = req.body;
    await creators.create(creator);
    res.json(creator);
});

module.exports = router;