const { response } = require('express');
const MessageSchema = require('../models/message');

const addMessage = async (req, res = response) => {
  try {
    const { interests, message } = req.body;
    const messageToSave = new MessageSchema(req.body);
  
    messageToSave.save();
  
    res.json({
      ok: true, 
      msg: 'You have save your messages',
      interests, message
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Some error with server occurs, try later'
    })
  }
}

module.exports = {
  addMessage
}