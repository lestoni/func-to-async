// jshint mocha: true
var assert = require('assert');

var toAsync = require('../');


describe('toAsync', function() {
  function syncFunc(arg) {
    if(typeof arg !== 'string') {
      throw new TypeError('Expected a string');
    }

    return arg;
  }

  var ctx = {
    num: 7,
    syncMethod: function () {
      return this.num;
    }
  };

  it('should pass result to callback', function(done) {
    var async = toAsync(syncFunc);
    var str = 'this is a test';

    async(str, function cb(err, result) {
      assert(!err);

      assert(result);
      assert.equal(result, str);

      done();
    });
  });

  it('should pass an error object to callback', function(done) {
    var async = toAsync(syncFunc);
    var num = 7;

    async(num, function cb(err, result) {
      assert(err);
      assert(err instanceof Error);

      assert(!result);

      done();
    });
  });

  it('should bind the function to the context', function(done) {
    var async = toAsync(ctx.syncMethod, ctx);

    async(function cb(err, result) {
      assert(!err);

      assert(result);
      assert.equal(result, 7);

      done();
    });
  });

});

