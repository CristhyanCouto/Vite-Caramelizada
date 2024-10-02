const express = require('express');
const router = express.Router();
//Table Name (current_status_ens)
const { current_status_ens } = require('../models');

//Get request to get all records in the current_status_ens table
router.get('/', async (req, res) => {
    const listOfCurrentStatusEns = await current_status_ens.findAll();
    res.json(listOfCurrentStatusEns);
});

//Post request to create a new record in the current_status_ens table
router.post('/', async (req, res) => {
    //body request to associate with the post request
    const  currentStatusEns = req.body;
    //create a new record in the current_status_ens table
    await current_status_ens.create(currentStatusEns)
    //send the currentStatusEns object as a json
    res.json(currentStatusEns);
});

module.exports = router;