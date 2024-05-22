/**
 * 检测给定值是否为 Function（函数）类型
 *
 * @remarks
 * 检测给定值是否为 Function（函数）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Function（函数） ，返回 true。
 * ```
 * TypeUtil.isFunction(new Function()) // => true
 * ```
 * 传入值为非 Function（函数） ，返回 false。
 * ```
 * TypeUtil.isFunction('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isFunction: any = (value: any = () => {}) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Function';
};

// typeof value === 'function'
// value.constructor === Function
