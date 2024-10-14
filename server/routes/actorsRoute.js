const express = require('express');
const router = express.Router();

//Table Name (actors)
const { actors } = require('../models');

//Get request to get all records in the actors table
router.get('/', async (req, res) => {
    const listOfActors = await actors.findAll();
    res.json(listOfActors);
});

//Get request to get a record by id in the actors table
router.get('/:idactor', async (req, res) => {
    //id parameter to associate with the get request
    const id = req.params.idactor;
    //find a record by the primary key
    const actor = await actors.findByPk(id);
    //send the actor object as a json
    res.json(actor);
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