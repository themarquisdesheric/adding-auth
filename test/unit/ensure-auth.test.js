const assert = require('chai').assert;

describe('ensure auth middleware', () => {

  it('routes to error handler when no token found in Authorization header', () => {
    const req = {
      get() { return ''; }
    };

    let error;
    const next = err => error = err;

    ensureAuth(req, null, next);

    assert.deepEqual(error, { code: 401, error: 'No Authorization Provided' });
  });

  

});