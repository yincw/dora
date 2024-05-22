/**
 * 检测给定值是否为 Arguments 对象类型
 *
 * @remarks
 * 检测给定值是否为 Arguments 对象类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为对象，返回 true。
 * ```
 * function test() {
 *    TypeUtil.isArguments(arguments) // => true
 * };
 * ```
 * 传入值为非 Arguments 对象，返回 false。
 * ```
 * TypeUtil.isArguments('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isArguments: any = (value: any = undefined) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Arguments';
};
