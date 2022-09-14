const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  interests: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  }
});

module.exports = model('Message', MessageSchema);