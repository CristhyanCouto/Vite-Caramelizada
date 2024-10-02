const express = require('express');
const router = express.Router();

//Table Name (rated_pg_pts)
const { rated_pg_pts } = require('../models');

//Get request to get all rated_pg_pts
router.get('/', async (req, res) => {
    const listOfRatedPgPts = await rated_pg_pts.findAll();
    res.json(listOfRatedPgPts);
});

//Post request to create a new record in the rated_pg_pts table
router.post('/', async (req, res) => {
    const ratedPgPts = req.body;
    await rated_pg_pts.create(ratedPgPts);
    res.json(ratedPgPts);
});

module.exports = router;