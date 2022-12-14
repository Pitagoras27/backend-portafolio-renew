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
app.use('/api/quotes', require('./routes/quotes'))

app.use(express.static('public'));

app.listen(process.env.PORT, () => {
  console.log(`Server runs in port ${ process.env.PORT }`)
});