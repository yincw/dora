/**
 * 检测给定值是否为 RegExp（正则）类型
 *
 * @remarks
 * 检测给定值是否为 RegExp（正则）类型；如果是，返回 true，否则返回 false。
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
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isRegExp: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'RegExp';
};

// value.constructor === RegExp
