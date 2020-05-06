const mongoose = require('mongoose');
const URI = "mongodb+srv://invitado:invitado@cluster0-ndgux.mongodb.net/toptive?retryWrites=true&w=majority"

mongoose.connect(URI, { useNewUrlParser: true} )
  .then(db => console.log('DB CONNECTED'))
  .catch(err => console.error(err));

module.exports = mongoose