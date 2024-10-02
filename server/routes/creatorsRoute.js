const express = require('express');
const router = express.Router();

//Table Name (creators)
const { creators } = require('../models');

//Get request to get all records in the creators table
router.get('/', async (req, res) => {
    const listOfCreators = await creators.findAll();
    res.json(listOfCreators);
});

//Post request to create a new record in the creators table
router.post('/', async (req, res) => {
    const creator = req.body;
    await creators.create(creator);
    res.json(creator);
});

module.exports = router;