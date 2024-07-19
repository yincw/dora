/**
 * 检测给定值是否为 Object（对象）类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Object（对象）类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为对象，返回 true。
 * ```
 * typeUtil.isObject({}) // => true
 * ```
 * 传入值为非对象，返回 false。
 * ```
 * typeUtil.isObject('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export let isObject: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Object';
};
