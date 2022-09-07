const { response } = require('express');


const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    message: 'renew token'
  })
}

const registerUser = (req, res = response) => {
  res.json({
    ok: true,
    message: 'register successful'
  })
}

const loginUser = (req, res = response) => {
  const { body } = req;
  const { email, password } = body;

  res.json({
    ok: true,
    message: 'Logued',
    email, password 
  })
}

module.exports = {
  renewToken,
  registerUser,
  loginUser
}