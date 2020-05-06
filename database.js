const mongoose = requiere('mongoose');

const URI = 'mongodb://localhost/'

mongoose.conect(URI)
    .then(db => console.log('DB CONNEECTED'))
    .catch(err => console.error(err));

module.exports = mongoose;