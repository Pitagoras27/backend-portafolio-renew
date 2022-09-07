const express = require('express');
require('dotenv').config();

const app = express();

app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))

app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
});