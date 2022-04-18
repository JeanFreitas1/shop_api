process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path:
    process.env.NODE_ENV === 'production'
      ? '.env'
      : require('fs').existsSync(`.env.${process.env.NODE_ENV}.local`)
      ? `.env.${process.env.NODE_ENV}.local`
      : `.env.${process.env.NODE_ENV}`,
});

require('express-async-errors');

const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.json({ type: 'test', success: true });
});

module.exports = app;
