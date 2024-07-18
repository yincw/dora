import { isNotEmpty } from './isNotEmpty';
/**
 * @categoryDescription globalUtil
 * 全局工具集
 * @showCategories
 */

/**
 * 检测给定值是否为空
 *
 * @category globalUtil
 *
 * @remarks
 * 检测给定值是否为空；如果是，返回 true，否则返回 false。
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
 *
 * @param value - 给定值
 * @returns Boolean
 * @defaultValue false
 *
 * @public
 */

export const isEmpty: any = (value: any) => {
  if (!isNotEmpty(value)) {
    return true;
  }
  return false;
};
