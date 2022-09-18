const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { addMessage } = require('../controllers/addMessage');

// TODO: verify token
// TODO: verify if check validation works
router.post(
  '/',
  [
    check('interests', 'You should write for what interest in me').not().isEmpty(),
    check('message', 'You should write a short message').not().isEmpty(),
  ],
  addMessage
)

module.exports = router
