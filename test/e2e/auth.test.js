const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('auth', () => {

  before(db.drop);

  const user = {
    username: 'user',
    password: 'abc'
  };

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
      badRequest('/auth/signup', { password: 'abc' }, 400, 'email and password must be supplied');
    });

    it('signup requires password', () => {
      badRequest('/auth/signup', { username: 'user' }, 400, 'email and password must be supplied');
    });
    //eslint-disable-next-line
    let token = '';

    it('signup', () => {
      request
        .post('/auth/signup')
        .send(user)
        .then(res => assert.ok(token = res.body.token));
    });

  });

});