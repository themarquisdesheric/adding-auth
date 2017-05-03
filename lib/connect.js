/* eslint no-console: "off" */
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/artwork';

mongoose.connect(dbUri);

mongoose.on('connected', () => {
  console.log(`mongoose default connection open to ${dbUri}`);
});

mongoose.on('disconnected', () => {
  console.log('mongoose default connection closed');
});

mongoose.on('error', err => {
  console.log(`mongoose default connection error ${err}`);
});

mongoose.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('mongoose default connection closed due to app termination');
    process.exit(0);
  });
});