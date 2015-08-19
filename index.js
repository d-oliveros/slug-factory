var Urlify = require('urlify');
var doWhilst = require('async').doWhilst;

var urlify = Urlify.create({
  addEToUmlauts: false,
  szToSs: true,
  spaces: '-',
  nonPrintable: '',
  trim: true
});

module.exports = function uniqueSlug(base, checkIterator, callback) {
  var path = urlify(base.toLowerCase());
  var iteration = 0;
  var valid;

  doWhilst(
    function(next) {
      if (iteration > 1) {
        path = path.substr(0, path.lastIndexOf('-'));
      }

      if (iteration) {
        path += '-' + iteration;
      }

      iteration++;

      checkIterator(path, function(err, invalid) {
        if (err) return next(err);

        valid = !invalid;

        next();
      });
    },
    function() { return !valid; },
    function(err) { callback(err, path); }
  );
};
