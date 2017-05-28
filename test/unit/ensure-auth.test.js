const assert = require('chai').assert;
const ensureAuth = require('../../lib/auth/ensure-auth')();
const tokenService = require('jsonwebtoken-promisified');

describe('ensure auth middleware', () => {

  it('routes to error handler when no token found in Authorization header', done => {
    const req = {
      get() { return ''; }
    };

    const next = error => {
      assert.deepEqual(error, { code: 401, error: 'No Authorization Found' });
      done();
    };

    ensureAuth(req, null, next);

  });

  it('routes to error handler with bad token', done => {
    const req = {
      get() { return 'invalid token'; }
    };

    const next = error => {
      assert.deepEqual(error, { code: 401, error: 'Authorization Failed' });
      done();
    };

    ensureAuth(req, null, next);
  });

  it.skip('calls "next" on valid authorization', done => {
    const payload = { _id: '123' };

    tokenService.sign(payload)
      .then(token => {
        const req= {
          get(header) { return header === 'Authorization' ? token : null; }
        };

        const next = error => {
          assert.isNotOk(error);
          assert.equal(req.user.id, payload._id);
          done();
        };

        ensureAuth(req, null, next);
      })
      .catch(done);
  });

});