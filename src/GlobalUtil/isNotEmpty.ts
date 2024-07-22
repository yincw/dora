import { isObject } from '../typeUtil/isObject';

/**
 * @public
 *
 * 检测给定值是否不为空
 *
 * @category globalUtil
 *
 * @remarks
 * 检测给定值是否不为空；如果是，返回 true，否则返回 false。
 *
 * @param value - 给定值
 * @returns Boolean
 *
 * @example
 * 传入空值，返回 true：
 * ```
 * var str = '11';
 * globalUtil.isNotEmpty(str) // true
 * ```
 * 传入非空值，返回 false：
 * ```
 * var str = '';
 * globalUtil.isNotEmpty(str) // false
 * ```
 */

export let isNotEmpty: any = (value: any) => {
  if (
    // 非 undefined & null
    (typeof value !== 'undefined' && value !== null) ||
    // 非 '' & ' '
    (typeof value === 'string' && value.trim().length > 0) ||
    // 非 []
    (Array.isArray(value) && value.length > 0) ||
    // 非 {}
    (isObject(value) && Object.keys(value).length > 0)
  ) {
    return true;
  }
  return false;
};
