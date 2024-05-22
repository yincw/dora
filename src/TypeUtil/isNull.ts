/**
 * 检测给定值是否为 Null 类型
 *
 * @remarks
 * 检测给定值是否为 Null 类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Null ，返回 true。
 * ```
 * TypeUtil.isNull(null) // => true
 * ```
 * 传入值为非 Null ，返回 false。
 * ```
 * TypeUtil.isNull('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isNull: any = (value: any = null) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Null';
};

// value === null
