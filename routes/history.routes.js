const express = require('express');
const router = express.Router();

const Toptive = require('../models/History'); //link the model file


router.get('/', async (req, res) => { 
    const history = await  History.find();
    res.json(history);
});

router.post('/', async (req, res) => { //post
    const { expression, result } = req.body;
    const history = new History({expression, result});
    await history.save();

    console.log(toptive);
    res.json({status: 'saved'});
});

module.exports = router;