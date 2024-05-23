/**
 * 检测给定值是否为 Undefined（未定义变量）类型
 *
 * @remarks
 * 检测给定值是否为 Undefined（未定义变量）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Undefined ，返回 true。
 * ```
 * TypeUtil.isUndefined(undefined) // => true
 * ```
 * 传入值为非 Undefined ，返回 false。
 * ```
 * TypeUtil.isUndefined(1) // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isUndefined: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Undefined';
};

// typeof value === 'undefined'
