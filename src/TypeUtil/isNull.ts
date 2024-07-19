/**
 * 检测给定值是否为 Null 类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Null 类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为 Null ，返回 true。
 * ```
 * typeUtil.isNull(null) // => true
 * ```
 * 传入值为非 Null ，返回 false。
 * ```
 * typeUtil.isNull('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export let isNull: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Null';
};

// value === null
