const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { getQuotes, setQuotes } = require('../controllers/quotes');

//TODO: Verify if check validation works
router.get('/', getQuotes);
router.post(
  '/', 
  [
    check('author', 'You should a name of author from quote').not().isEmpty(),
    check('quote', 'You should to write a quote').not().isEmpty()
  ], 
  setQuotes
);

module.exports = router;