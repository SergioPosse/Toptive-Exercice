const mongoose = require('mongoose');

const { Schema } = mongoose;

const HistorySchema = new Schema({
  expression: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('History', HistorySchema); //create the model with the schema, all with mongoose tools