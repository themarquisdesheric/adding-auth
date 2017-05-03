/* eslint no-console: "off" */
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/artwork';

mongoose.connect(dbUri);

mongoose.on('connected', () => {
  console.log(`mongoose default connection open to ${dbUri}`);
});