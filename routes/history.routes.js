const express = require('express');
const router = express.Router();

const History = require('../models/History'); //link the model file


router.get('/', async (req, res) => { 
    const history = await  History.find();
    res.json(history);
});

router.post('/', async (req, res) => { //post
    console.log(req.body);
});

module.exports = router;