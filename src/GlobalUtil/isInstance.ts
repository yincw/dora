/**
 * @public
 *
 * 检测给定值是否是给定类的实例
 *
 * @category globalUtil
 *
 * @remarks
 * 检测给定值是否是给定类的实例；如果是，返回 true，否则返回 false。
 *
 * @param value - 指定的给定值
 *
 * @returns Boolean
 *
 * @defaultValue Boolean
 *
 * @example
 * 传入值是给定类的实例，返回 true。
 * ```
 * function Person(name, age) {
 *   this.name = name
 *   this.age = age
 * }
 * const person = new Person('Rose', 18);
 *
 * globalUtil.isInstance(person, Person) // => true
 * ```
 * 传入值不是给定类的实例，返回 false。
 * ```
 * var p1 = {name: 'a', age: 18};
 * globalUtil.isInstance(p1, Person) // => false
 * ```
 */

export let isInstance: any = (value: any, Classes: any) => {
  // 用 instanceof 准确判断实例关系
  return value instanceof Classes;
};

// http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
