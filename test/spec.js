var expect = require('chai').expect;
var slugFactory = require('../index');

describe('slug-factory', function() {

  it('should slugify correctly', function(done) {
    var exists = 4;

    function iterator(path, cb) {
      exists--;
      cb(null, exists);
    }

    slugFactory('slugen-ipson', iterator, function(err, slug) {
      if (err) return done(err);
      expect(slug).to.equal('slugen-ipson-3');
      done();
    });
  });
});
