const express = require('express');
const router = express.Router();

const calc = require('../calc.js');

const History = require('../models/History'); //link the model file


//my endpoints to make RESTFUL
//i use async await that is something that im testing is very new for me

router.get('/', async (req, res) => { 
    const history = await  History.find();
    res.json(history);
});

router.post('/history', async (req, res) => { //post
    const { expression, result } = req.body;
    const history = new History({expression, result});
    await history.save(); //its save in "histories" mongo atlas use plural and singular for model and collection like rails

    console.log(history);
    res.json({status: 'saved'});
});

router.post('/calculate',(req, res) => { //post
    const { expression } = req.body;
    let result = calc.calc_without_brackets(expression, "/");
    let result2 = calc.calc_without_brackets(result, "*");
    let result3 = calc.calc_without_brackets(result2, "+");
    let result4 = calc.calc_without_brackets(result3, "-");
    res.json(result4);
});


module.exports = router;