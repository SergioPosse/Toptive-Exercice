const express = require('express');
const app = express();
const path = require('path'); //for use the local path in my physic disk
const morgan = require('morgan');
const { mongoose } = require('./database') 


//SERVER (EXPRESS) SETTINGS 
app.set('port', process.env.PORT || 3000); //process.env.port is in case that deploy this project

//MIDDLEWARE
//things to do before the users requests
app.use(morgan('dev'));//morgan allow to see requests in server console

app.use(express.json()); //now express include json 

app.use(express.static(path.join(__dirname, 'public')));

//ROUTES

app.use('/api', require('./routes/routes'));

//LISTENING THE SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
