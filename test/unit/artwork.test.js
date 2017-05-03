const assert = require('chai').assert;
const Artwork = require('../../lib/models/artwork');

describe('artwork model', () => {

  it.only('ensures invalid documents are not accepted', () => {
    const invalidArtwork = new Artwork();

    return invalidArtwork.validate()
      .then(() => { throw new Error('expected validation to fail'); },
      err => {
        const errors = err.errors;

        assert.ok(errors.name && errors.name.kind === 'required');
        assert.ok(errors.artist && errors.artist.kind === 'required');
        assert.ok(errors.medium && errors.medium.kind === 'required');
      });
  });

});