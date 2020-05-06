const express = require('express');
const app = express();
const path = require('path');

//MIDDLEWARE
//things to do before the users requests


//SERVER (EXPRESS) SETTINGS 
app.set('port', 3000);

app.set('engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));


//ROUTES
app.use(require('./routes/routes.js'));

//LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log("Server on port 3000");
});