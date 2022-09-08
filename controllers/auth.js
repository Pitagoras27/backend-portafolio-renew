const { response } = require('express');
const { generateJWT } = require('../helpers/generateJWT')
const UserSchema = require('../models/user');
const bcrypt = require('bcryptjs');

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    message: 'renew token'
  })
}

const registerUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let user = await UserSchema.findOne({ email });

    if( user ) {
      return res.status(400).json({
        ok: false, 
        msg: 'Email already exists in database.'
      })
    }

    user = new UserSchema(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    
    const token = await generateJWT(user._id, user.name);

    await user.save();

    res.status(201).json({
      ok: true,
      uid: user._id,
      msg: 'register successful',
      token
    });
  } catch (error) {
    console.log({error})
    res.status(500).json({
      ok: false,
      msg: 'An error occurred, try later'
    });
  }
}

const loginUser = async (req, res = response) => {
  const { body } = req;
  const { password, email } = body;

  try {
    // UserSchema contains previsualization of Mongo
    const user = await UserSchema.findOne({ email });

    if(!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email not exists!',
      });
    }

    const userPass = bcrypt.compareSync(password, user.password);

    if (!userPass) {
      return res.status(400).json({
        ok: false,
        msg: 'Password is not correct',
      });
    }

    const token = await generateJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      uid: user._id,
      name: user.name,
      msg: 'user logued',
      token
    });

  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'An error occurred, try later',
    });
  }
}

module.exports = {
  renewToken,
  registerUser,
  loginUser
}