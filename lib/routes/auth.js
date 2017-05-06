const router = require('express').Router();
const User = require('../models/user');
// const ensureAuth = require('../auth/ensure-auth')();
const tokenService = require('../auth/token-service');

function hasEmailAndPassword(req, res, next) {
  const user = req.body;

  if(!user.email || !user.password) {
    return next({
      code: 400,
      error: 'email and password must be supplied'
    });
  }

  next();
}

router
  .post('/signup', hasEmailAndPassword, (req, res, next) => {
    // TODO: destructure once implementation working
    const email = req.body.email;
    const password = req.body.password;
    delete req.body.password;

    User.exists({ email })
      .then(exists => {
        if (exists) { throw { code: 400, error: 'email in use' }; }

        const user = new User({ email });

        user.generateHash(password);
        return user.save();
      })
      .then(user => tokenService.sign(user))
      .then(token => res.send({ token }))
      .catch(next);
  });

module.exports = router;