/**
 * 检测给定值是否为 Number（数值）类型
 *
 * @remarks
 * 检测给定值是否为 Number（数值）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Number ，返回 true。
 * ```
 * TypeUtil.isNumber(Number) // => true
 * ```
 * 传入值为非 Number ，返回 false。
 * ```
 * TypeUtil.isNumber('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isNumber: any = (value: any = 0) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Number';
};

// typeof value === 'number'
// value.constructor === Number
