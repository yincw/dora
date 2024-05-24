// define(['../dist/typeUtil/isObject'], function (module) {
//   console.log('isObject', module.isObject({}));
// });
define(['../dist/typeUtil/index'], function (module) {
  var typeUtil = module.default;
  console.log('typeUtil.isObject', typeUtil.isObject({}));
  console.log('typeUtil.isNull', typeUtil.isNull(null));
});
