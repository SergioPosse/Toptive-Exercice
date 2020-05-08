const express = require('express');
const router = express.Router();

const calc = require('../calc.js');

const History = require('../models/History'); //link the model file


//my endpoints to make RESTFUL
//i use async await that is something that im testing is very new for me

router.get('/history', async (req, res) => { 
    const history = await  History.find();
    res.json(history);
});

router.post('/history', async (req, res) => { //post
    const { expression, result } = req.body;
    console.log("result in route: "+result);
    console.log("expresion in result: "+expression);
    const history = new History({expression, result});
    await history.save(); //its save in "histories" mongo atlas use plural and singular for model and collection like rails

    //console.log(history);
    res.json({status: 'saved'});
});

router.post('/calculate',(req, res) => { //post
    //console.log("entro al router");
    const { expression } = req.body;
  
    //console.log("expression router: "+expression);
    var resultado = calc.calc_with_brackets(0,expression.length,expression);
    //console.log("resultado: "+resultado);
    res.json(resultado);
});


module.exports = router;