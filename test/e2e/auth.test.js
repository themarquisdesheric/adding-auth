const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('auth', () => {

  before(db.drop);

  // const user = {
  //   username: 'user',
  //   password: 'abc'
  // };

  describe('user management', () => {
    
    const badRequest = (url, data, code, error) => {
      return request
        .post(url)
        .send(data)
        .then(
          () => { throw new Error('status should not be ok'); },
          res => {
            assert.equal(res.status, code);
            assert.equal(res.response.body.error, error);
          }
        );
    };

    it('signup requires username', () => {
      badRequest('/auth/signup', { password: 'abc' }, 400, 'username and password must be supplied');
    });

    it('signup requires password', () => {
      badRequest('/auth/signup', { username: 'user' }, 400, 'username and password must be supplied');
    });

  });

});