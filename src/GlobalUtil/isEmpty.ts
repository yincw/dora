/**
 * 检测给定值是否为空
 *
 * @remarks
 * 检测给定值是否为空；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入空值，返回 true：
 * ```
 * var str = '';
 * GlobalUtil.isEmpty(str) // true
 * ```
 * 传入非空值，返回 false：
 * ```
 * var str = '11';
 * GlobalUtil.isEmpty(str) // false
 * ```
 *
 * @param value - 给定值
 * @returns Boolean
 * @defaultValue false
 *
 * @public
 */

import { isNotEmpty } from './isNotEmpty';

export const isEmpty: any = (value: any = '') => {
  if (!isNotEmpty(value)) {
    return true;
  }
  return false;
};
