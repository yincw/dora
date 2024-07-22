/**
 * @public
 *
 * 检测给定值是否为 Number（数值）类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Number（数值）类型；如果是，返回 true，否则返回 false。
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns Boolean
 *
 * @example
 * 传入值为 Number ，返回 true。
 * ```
 * typeUtil.isNumber(Number) // => true
 * ```
 * 传入值为非 Number ，返回 false。
 * ```
 * typeUtil.isNumber('') // => false
 * ```

 */

export let isNumber: <T>(value: T) => boolean = function <T>(value: T): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Number';
};

// typeof value === 'number'
// value.constructor === Number
