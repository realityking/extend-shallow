'use strict';

module.exports = function extend(o, objects) {
  if (o == null) { return {}; }
  if (objects == null) { return o; }

  var args = [].slice.call([], arguments, 1);
  var len = args.length;

  for (var i = 0; i < len; i++) {
    var obj = args[i];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[key] = obj[key];
      }
    }
  }
  return o;
};
