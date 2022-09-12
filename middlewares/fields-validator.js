
const { validationResult } = require('express-validator');

const fieldsValidators = (req, res, next) => {
  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      msg: errors.mapped()
    })
  }

  next();
}

module.exports = {
  fieldsValidators,
}

const fieldMatchPassword = ( val,  { req } ) => {
  if (val !== req.body.password) return false;
  return true
}

module.exports = {
  fieldsValidators,
  fieldMatchPassword
}