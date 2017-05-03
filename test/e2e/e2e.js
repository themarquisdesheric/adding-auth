const db = require('./_db');
const request = require('./_request');
const assert = require('chai').assert;

describe('artwork API', () => {

  before(db.drop);

  it('initial GET should return empty array', () => {
    return request.get('/artworks')
      .then(res => res.body)
      .then(art => assert.deepEqual(art, []));
  });

});