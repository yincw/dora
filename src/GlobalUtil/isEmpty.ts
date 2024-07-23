import { isNotEmpty } from './isNotEmpty';

/**
 * @public
 *
 * 检测给定值是否为空
 *
 * @category globalUtil
 *
 * @remarks
 * 检测给定值是否为空；如果是，返回 true，否则返回 false。
 *
 * @param value - 给定值
 * @returns 如果参数 value 不为空，返回 true，否则，返回 false。
 * @defaultValue false
 *
 * @example
 * 传入空值，返回 true：
 * ```
 * var str = '';
 * globalUtil.isEmpty(str) // true
 * ```
 * 传入非空值，返回 false：
 * ```
 * var str = '11';
 * globalUtil.isEmpty(str) // false
 * ```
 */

export let isEmpty: any = (value: any) => {
  if (!isNotEmpty(value)) {
    return true;
  }
  return false;
};
