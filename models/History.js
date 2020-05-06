const mongoose = require('mongoose');
const { Schema } = mongoose;

const HistorySchema = new Schema({
  example: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('History', HistorySchema);