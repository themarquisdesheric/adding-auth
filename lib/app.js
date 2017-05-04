const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./error-handlers/error-handler');

app.use(morgan('dev'));
app.use(bodyParser.json());

const artworks = require('./routes/artworks');

app.use('/artworks', artworks);

app.use(errorHandler());

module.exports = app;