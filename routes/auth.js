const { Router } = require('express');
const router = Router();
const { loginUser, renewToken, registerUser } = require('../controllers/auth');

router.get('/renew', renewToken)

router.post('/', loginUser)

router.post('/newUser', registerUser)

module.exports = router;