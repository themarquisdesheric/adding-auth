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

  let nude = { name: 'Nude Descending A Staircase', artist: 'Duchamp', medium: 'oil' };

  it('POST should add a document', () => {
    return request.post('/artworks')
      .send(nude)
      .then(res => res.body)
      .then(saved => {
        assert.ok(saved._id);

        nude = saved;
      });
  });

  it('GET by id should return document', () => {
    return request.get(`/artworks/${nude._id}`)
      .then(res => res.body)
      .then(got => assert.deepEqual(got, nude));
  });

});