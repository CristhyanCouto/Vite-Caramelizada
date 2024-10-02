const express = require('express');
const router = express.Router();

//Table Name (genre_pts)
const { genre_pts } = require('../models');

//Get request to get all genre_pts
router.get('/', async (req, res) => {
    const listOfGenrePts = await genre_pts.findAll();
    res.json(listOfGenrePts);
});

//Post request to create a new record in the genre_pts table
router.post('/', async (req, res) => {
    const genrePt = req.body;
    await genre_pts.create(genrePt);
    res.json(genrePt);
});

module.exports = router;