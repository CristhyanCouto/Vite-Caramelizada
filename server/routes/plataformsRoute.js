const express = require('express');
const router = express.Router();

//Table Name (plataforms)
const { plataforms } = require('../models');

//Get request to get all plataforms
router.get('/', async (req, res) => {
    const listOfPlataforms = await plataforms.findAll();
    res.json(listOfPlataforms);
});

//Post request to create a new record in the plataforms table
router.post('/', async (req, res) => {
    const plataform = req.body;
    await plataforms.create(plataform);
    res.json(plataform);
});

module.exports = router;