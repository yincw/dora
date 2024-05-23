/**
 * 检测给定值是否为 String（字符串值）类型
 *
 * @remarks
 * 检测给定值是否为 String（字符串值）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 String ，返回 true。
 * ```
 * TypeUtil.isString('') // => true
 * ```
 * 传入值为非 String ，返回 false。
 * ```
 * TypeUtil.isString(1) // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isString: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'String';
};

// typeof value === 'string'
// value.constructor === String
