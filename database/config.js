const mongoose = require('mongoose');

const dbConnection = async() => {
  try {
    mongoose.connect( process.env.CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DB conected!')
  } catch(error) {
    console.log(error);
  }
}

module.exports={
  dbConnection
}