/**
 * @public
 *
 * 检测给定值是否为 Boolean（布尔值）类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Boolean（布尔值）类型；如果是，返回 true，否则返回 false。
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns true 或 false
 *
 * @example
 * 传入值为布尔值，返回 true。
 * ```
 * typeUtil.isBoolean(true) // => true
 * typeUtil.isBoolean(false) // => true
 * ```
 * 传入值为非布尔值，返回 false。
 * ```
 * typeUtil.isBoolean('') // => false
 * ```
 */

export let isBoolean: <T>(value: T) => boolean = function <T>(value: T): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean';
};

// typeof value === 'boolean'
// value.constructor === Boolean
