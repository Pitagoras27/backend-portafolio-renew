const { Schema, model } = require('mongoose');

const MessageSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
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