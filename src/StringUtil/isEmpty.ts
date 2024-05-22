/**
 * 检测给定字符串值是否为空
 *
 * @remarks
 * 检测给定字符串值是否为空；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为空字符串，返回 true。
 * ```
 * StringUtil.isEmpty('') // => true
 * ```
 * 传入值为非空字符串，返回 false。
 * ```
 * StringUtil.isEmpty('？？？') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isEmpty: any = (value: string = '') => {
  return value === '';
  // return value.length === 0;
};
