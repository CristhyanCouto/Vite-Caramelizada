const express = require('express');
const router = express.Router();
//Table Name (current_status_pts)
const { current_status_pts } = require('../models');

//Get request to get all records in the current_status_ens table
router.get('/', async (req, res) => {
    const listOfCurrentStatusPts = await current_status_pts.findAll();
    res.json(listOfCurrentStatusPts);
});

//Post request to create a new record in the current_status_ens table
router.post('/', async (req, res) => {
    //body request to associate with the post request
    const  currentStatusPts = req.body;
    //create a new record in the current_status_ens table
    await current_status_pts.create(currentStatusPts)
    //send the currentStatusEns object as a json
    res.json(currentStatusPts);
});

module.exports = router;