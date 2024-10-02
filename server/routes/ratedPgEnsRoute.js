const express = require('express');
const router = express.Router();

//Table Name (rated_pg_ens)
const { rated_pg_ens } = require('../models');

//Get request to get all rated_pg_ens
router.get('/', async (req, res) => {
    const listOfRatedPgEns = await rated_pg_ens.findAll();
    res.json(listOfRatedPgEns);
});

//Post request to create a new record in the rated_pg_ens table
router.post('/', async (req, res) => {
    const ratedPgEns = req.body;
    await rated_pg_ens.create(ratedPgEns);
    res.json(ratedPgEns);
});

module.exports = router;