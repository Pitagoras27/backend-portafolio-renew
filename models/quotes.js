const { Schema, model } = require('mongoose');

const QuotesSchema = Schema({
  author: {
    type: String,
    require: true
  },
  quote: {
    type: String,
    require: true
  }
});

module.exports = model('Quotes', QuotesSchema);