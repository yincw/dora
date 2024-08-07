/**
 * @public
 *
 * 检测给定值是否为 Array（数组）类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Array（数组）类型；如果是，返回 true，否则返回 false。
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns Boolean
 *
 * @example
 * 传入值为数组，返回 true。
 * ```
 * typeUtil.isArray([]) // => true
 * ```
 * 传入值为非数组，返回 false。
 * ```
 * typeUtil.isArray('') // => false
 * ```
 */

export let isArray: <T>(value: T) => boolean = function <T>(value: T): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Array';
};

// http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
// 操作符
// typeof: typeof varName === 'undefined''; // false
// instanceof: varName instanceof Array;  // true，同原型链
// 构造函数
// constructor: varName.constructor === Array;  // true
// 原型链（内部 [[prototype]] 引用对象是否相同）
// __proto__: varName.__proto__ === Array.prototype;  // true
// Object.getPrototypeOf(): Object.getPrototypeOf(varName) === Array.prototype;  // true ES5
// Array.prototype.isPrototypeOf(): Array.prototype.isPrototypeOf(varName); // true
// 原型属性
// Object.prototype.toString(): Object.prototype.toString.call(varName); // '[object Array]'
// 数组方法
// Array.isArray(): Array.isArray(varName); // true ES5
