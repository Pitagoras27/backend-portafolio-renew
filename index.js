const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnection } = require('./database/config');

dbConnection();

const app = express();

app.use(cors({
  origin: "*"
}));

app.use( express.json() );

app.use('/api/auth', require('./routes/auth'))
app.use('/api/messages-client', require('./routes/messages'))

app.use(express.static('public'));

app.listen(4000, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
});