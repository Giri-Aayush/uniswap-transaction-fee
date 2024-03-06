const express = require('express');

const db = require('./database');
const Transaction = require('./models/Transaction');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Uniswap Transaction Fee API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});