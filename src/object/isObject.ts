/**
 * 检测给定值是否为对象
 *
 * @remarks
 * 检测给定值是否为对象；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为对象，返回 true。
 * ```
 * isObject({}) -> true
 * ```
 * 传入值为非对象，返回 false。
 * ```
 * isObject('') -> false
 * ```
 *
 * @param obj - 指定的 JavaScript 对象
 * @returns true || false
 *
 * @beta
 */

export const isObject: any = (obj: object) => {
  return Object.prototype.toString.call(obj).slice(8, -1) === 'Object';
};

/* ******
 * 参考文献
 ****** */
// -
