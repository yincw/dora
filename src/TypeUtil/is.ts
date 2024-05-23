/**
 * 检测给定值的数据类型（内置数据结构类型及内置类类型）
 *
 * @remarks
 * 检测给定值的数据类型；返回数据类型名称。常见类型有：
 * - Undefined
 * - 内置数据结构类
 * - Null
 * - Object
 * - Array
 * - Boolean
 * - Number
 * - String
 * - 内置功能类
 * - Date
 * - RegExp
 * - Function
 * - Arguments
 * - Error
 *
 * @example
 * var obj = {};
 * TypeUtil.is(obj); // 'Object'
 *
 * @param value - 指定的给定值
 * @returns String
 * @defaultValue String
 *
 * @public
 */

export const is: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1);
};
