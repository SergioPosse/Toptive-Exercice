const express = require('express');
const router = express.Router();


router.get('/', (req, res) => { 
    res.render('index.ejs', {titulo: "Calculadora REST"}); //no need to specificate the views path, already did in settings with path.join
});

module.exports = router;