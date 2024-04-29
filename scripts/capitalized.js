exports.capitalized = function (str) {
  return str.toLowerCase().replace(/\b[a-z]/g, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
};
