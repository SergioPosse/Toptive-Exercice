const express = require('express');
const app = express();
const path = require('path');
const morgan = requiere('morgan');

const { mongoose } = require('./database') 

const History = require('./models/History'); //link the model file

//SERVER (EXPRESS) SETTINGS 
app.set('port', process.env.PORT || 3000); //process.env.port is in case that deploy this project


//MIDDLEWARE
//things to do before the users requests
app.use(morgan('dev'));//morgan allow to see requests in server console

app.use(express.json()); //now express include json 

app.set('engine', 'ejs'); //i use ejs for a thing with partials thats is very useful in front

app.set('views', path.join(__dirname, 'views'));//specificate the view folder with __dirname (local path of project)

app.use(express.static('public'));


//ROUTES
//app.use(require('./routes/history.routes.js')); //in this exercice i only write routes in one archive

app.use('/api/history', requiere('./routes/history.routes'));


//LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});