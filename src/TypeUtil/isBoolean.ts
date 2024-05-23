/**
 * 检测给定值是否为 Boolean（布尔值）类型
 *
 * @remarks
 * 检测给定值是否为 Boolean（布尔值）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为布尔值，返回 true。
 * ```
 * TypeUtil.isBoolean(true) // => true
 * TypeUtil.isBoolean(false) // => true
 * ```
 * 传入值为非布尔值，返回 false。
 * ```
 * TypeUtil.isBoolean('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isBoolean: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Boolean';
};

// typeof value === 'boolean'
// value.constructor === Boolean
