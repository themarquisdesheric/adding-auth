const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

const artworks = require('./routes/artworks');

app.use('/artworks', artworks);

module.exports = app;