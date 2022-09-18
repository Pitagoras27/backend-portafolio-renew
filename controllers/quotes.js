const { response } = require('express');
const QuotesSchema = require('../models/quotes');

const getQuotes = async (req, res = response) => {
  try {
  const quotes = await QuotesSchema.find().populate('author', 'quote');
    
    res.status(201).json({
      ok: true,
      quotes
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Some error occur, try more later',
      error
    })
  }
}

const setQuotes = async (req, res = response) => {
  const { author, quote } = req.body
  try { 
    const quoteSave = new QuotesSchema(req.body);
    quoteSave.save();

    res.status(201).json({
      ok: true,
      msg: 'Save quotes successful',
      author, quote
    });
  } catch (error) {
    console.log({error})
    res.status(500).json({
      ok: false,
      msg: 'Don\'t save quotes, try later',
      error
    })
  }
}

module.exports = {
  getQuotes,
  setQuotes
}