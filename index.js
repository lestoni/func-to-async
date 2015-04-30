'use strict';

/**
 *
 * Load Module Dependencies.
 */
var async = require('async');

/**
 * Create an async function out of a sync one.
 *
 * @param {Function} fn Synchronous function to convert
 * @param {Object}  ctx  Binding context of the function
 *
 * @return {Function}
 */
module.exports = function toAsync(fn, ctx){
  return function apply() {
    var args = [].slice.call(arguments);
    var len = args.length;
    var cb;

    if(args.length > 1) {
      cb = args.splice(len - 1, 1)[0];
    } else {
      cb = args[0];
    }

    async.nextTick(function nextTick() {
      try {
        var result = fn.apply(ctx || null, args);

        cb(null, result);
      } catch (ex) {
        cb(ex);
      }
    });
  };
};

