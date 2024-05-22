/**
 * 检测给定值是否为 Error 类型
 *
 * @remarks
 * 检测给定值是否为 Error 类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Error ，返回 true。
 * ```
 * TypeUtil.isError(new Error()) // => true
 * ```
 * 传入值为非 Error ，返回 false。
 * ```
 * TypeUtil.isError('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isError: any = (value: any = new Error()) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Error';
};

// value.constructor === Error
