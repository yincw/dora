/**
 * @public
 *
 * 检测给定值是否为 Arguments 对象类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Arguments 对象类型；如果是，返回 true，否则返回 false。
 *
 * @typeParam T - 给定值的类型
 * @param value - 指定的给定值
 * @returns true 或 false
 *
 * @example
 * 传入值为 Arguments 对象，返回 true。
 * ```
 * function test() {
 *    typeUtil.isArguments(arguments) // => true
 * };
 * ```
 * 传入值为非 Arguments 对象，返回 false。
 * ```
 * typeUtil.isArguments('') // => false
 * ```
 */

export let isArguments: <T>(value: T) => boolean = function <T>(value: T): boolean {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Arguments';
};
