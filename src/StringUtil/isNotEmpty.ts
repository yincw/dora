/**
 * 检测给定字符串值是否不为空
 *
 * @remarks
 * 检测给定字符串值是否不为空；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为非空字符串，返回 true。
 * ```
 * StringUtil.isNotEmpty('？？？') // => true
 * ```
 * 传入值为空字符串，返回 false。
 * ```
 * StringUtil.isNotEmpty('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */
// import { isString } from '../TypeUtil/isString';

export const isNotEmpty: any = (data: any = '') => {
  // return isString(data) && data.trim().length > 0;
  return typeof data === 'string' && data.trim().length > 0;
};
