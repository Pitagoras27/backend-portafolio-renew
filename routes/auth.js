const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { loginUser, renewToken, registerUser } = require('../controllers/auth');
const { fieldsValidators } = require('../middlewares/fields-validator');
const { validateJwt } = require('../middlewares/validateJwt');

router.get('/renew', validateJwt, renewToken)

router.post('/', [
  check('email', 'Email should have correct format').isEmail(),
  check('password', 'Password in not correct').isLength(5),
  fieldsValidators
], loginUser)

router.post('/newUser', [
  check('name', 'Name is mandatory').not().isEmpty(),
  check('email', 'Email should have correct format').isEmail(),
  check('password', 'Password should be 5 characters minimun').isLength(5),
  fieldsValidators,
],registerUser)

module.exports = router;