
exports.min = function min (array) {
  return (!Array.isArray(array) || !array.length) ? 0 : Math.min.apply(null, array);
}

exports.max = function max (array) {
  return (!Array.isArray(array) || !array.length) ? 0 : Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  return (!Array.isArray(array) || !array.length) ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}
