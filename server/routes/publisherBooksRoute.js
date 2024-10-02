const express = require('express');
const router = express.Router();

//Table Name (publisher_books)
const { publisher_books } = require('../models');

//Get request to get all records in the publisher_books table
router.get('/', async (req, res) => {
    const listOfPublisherBooks = await publisher_books.findAll();
    res.json(listOfPublisherBooks);
});

//Post request to create a new record in the publisher_books table
router.post('/', async (req, res) => {
    const publisherBook = req.body;
    await publisher_books.create(publisherBook);
    res.json(publisherBook);
});

module.exports = router;