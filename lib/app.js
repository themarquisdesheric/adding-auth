const express = require('express');
const app = express();

const artworks = require('./routes/artworks');

app.use('/artworks', artworks);

module.exports = app;