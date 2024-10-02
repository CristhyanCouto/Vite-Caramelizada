const express = require('express');
const router = express.Router();

//Table Name (actors)
const { actors } = require('../models');

//Get request to get all records in the actors table
router.get('/', async (req, res) => {
    const listOfActors = await actors.findAll();
    res.json(listOfActors);
});

//Post request to create a new record in the actors table
router.post('/', async (req, res) => {
    //body request to associate with the post request
    const  actor = req.body;
    //create a new record in the actors table
    await actors.create(actor)
    //send the actor object as a json
    res.json(actor);
});

module.exports = router;