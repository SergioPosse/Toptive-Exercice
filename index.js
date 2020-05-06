const express = require('express');
const app = express();
const path = require('path');

//MIDDLEWARE
//things to do before the users requests


//SERVER (EXPRESS) SETTINGS 
app.set('port', process.env.PORT || 3000); //process.env.port is in case that deploy this project

app.set('engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));


//ROUTES
app.use(require('./routes/routes.js'));

//LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});