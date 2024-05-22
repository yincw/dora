/**
 * 检测给定对象值是否为空
 *
 * @remarks
 * 检测给定对象值是否为空；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为空对象，返回 true。
 * ```
 * ObjectUtil.isEmpty({}) // => true
 * ```
 * 传入值为非空对象，返回 false。
 * ```
 * ObjectUtil.isEmpty({a: 'a'}) // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isEmpty: any = (value: any = {}) => {
  return Object.keys(value).length === 0;
};
