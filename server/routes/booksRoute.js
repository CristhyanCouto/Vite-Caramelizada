const express = require('express');
const router = express.Router();

//Table Name (books)
const { books } = require('../models');

//Get request to get all records in the books table
router.get('/', async (req, res) => {
    const listOfBooks = await books.findAll();
    res.json(listOfBooks);
});

//Post request to create a new record in the books table
router.post('/', async (req, res) => {
    const book = req.body;
    await books.create(book);
    res.json(book);
});

module.exports = router;