const router = require('express').Router();
const Artwork = require('../models/artwork');

router
  .get('/', (req, res, next) => {
    Artwork.find()
      .then(art => res.send(art))
      .catch(next);
  })

  .post('/', (req, res, next) => {
    new Artwork(req.body)
      .save()
      .then(artwork => res.send(artwork))
      .catch(next);
  });

module.exports = router;