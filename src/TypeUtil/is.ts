/**
 * @public
 *
 * 检测给定值的数据类型（内置数据结构类型及内置类类型）
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值的数据类型；返回数据类型名称。常见类型有：
 * - Undefined
 * - 内置数据结构类
 *  - Null
 *  - Boolean
 *  - Number
 *  - String
 *  - Object
 *  - Array
 * - 内置功能类
 *  - Date
 *  - RegExp
 *  - Function
 *  - Arguments
 *  - Error
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns String
 *
 * @example
 * ```js
 * var obj = {};
 * typeUtil.is(obj); // => 'Object'
 * ```
 */

export let is: <T>(value: T) => string = function <T>(value: T): string {
  return Object.prototype.toString.call(value).slice(8, -1);
};
