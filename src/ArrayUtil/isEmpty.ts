/**
 * 检测给定数组是否为空
 *
 * @remarks
 * 检测给定数组是否为空；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入空数组，返回 true：
 * ```
 * var str = [];
 * ArrayUtil.isEmpty(str) // true
 * ```
 * 传入非空数组，返回 false：
 * ```
 * var str = [1];
 * ArrayUtil.isEmpty(str) // false
 * ```
 *
 * @param value - 给定值
 * @returns Boolean
 * @defaultValue true
 *
 * @public
 */

export const isEmpty: any = (value: any = []) => {
  return value.length === 0;
};
