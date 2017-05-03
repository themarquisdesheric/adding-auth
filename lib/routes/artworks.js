const router = require('express').Router();
const Artwork = require('../models/artwork');

router
  .get('/', (req, res, next) => {
    Artwork.find()
      .then(art => res.send(art))
      .catch(next);
  });

module.exports = router;