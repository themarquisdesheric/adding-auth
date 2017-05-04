const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const schema = new Schema({
  email: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema);