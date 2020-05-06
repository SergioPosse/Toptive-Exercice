const express = require('express');
const router = express.Router();

const History = require('../models/History'); //link the model file


//my endpoints to make RESTFUL
//i use async await that is something that im testing is very new for me

router.get('/', async (req, res) => { 
    const history = await  History.find();
    res.json(history);
});

router.post('/', async (req, res) => { //post
    const { expression, result } = req.body;
    const history = new History({expression, result});
    await history.save(); //its save in "histories" mongo atlas use plural and singular for model and collection like rails

    console.log(history);
    res.json({status: 'saved'});
});

router.delete('/:id', async (req, res) => {
    await History.findByIdAndRemove(req.params.id);
    res.json({status: 'removed'});
});

module.exports = router;