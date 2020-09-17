/**
 * 判断给定对象是否为空
 *
 * @remarks
 * 判断给定对象是否为空，若为空，返回 ture，否则返回 false。
 *
 * @example
 * ```js
 * isEmptyObject({})  -> true
 * isEmptyObject({a: 'a'})  -> false
 * ```
 *
 * @param obj - 指定的 JavaScript 对象
 * @returns true | false
 *
 * @public
 */

export const isEmptyObject: any = (obj: object) => {
  if (!obj) throw new Error('isEmptyObject 参数不能为空。');
  Object.values(obj);
  for (var key in obj) {
    return false;
  }
  return true;
};

/* ******
 * 参考文献
 ****** */
// -
