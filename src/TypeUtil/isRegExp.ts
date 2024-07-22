/**
 * @public
 *
 * 检测给定值是否为 RegExp（正则）类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 RegExp（正则）类型；如果是，返回 true，否则返回 false。
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns Boolean
 *
 * @example
 * 传入值为 RegExp ，返回 true。
 * ```
 * typeUtil.isRegExp(new RegExp()) // => true
 * ```
 * 传入值为非 RegExp ，返回 false。
 * ```
 * typeUtil.isRegExp('') // => false
 * ```
 */

export let isRegExp: <T>(value: T) => boolean = function <T>(value: T): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp';
};

// value.constructor === RegExp
