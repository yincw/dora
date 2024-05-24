exports.capitalized = function (str) {
  return str.toLowerCase().replace(/\b[a-z]/g, function (firstLetter) {
    // return firstLetter.toUpperCase(); // 首字母大写
    return firstLetter.toLowerCase(); // 首字母小写
  });
};
