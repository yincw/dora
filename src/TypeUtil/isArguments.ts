/**
 * 检测给定值是否为 Arguments 对象类型
 *
 * @category typeUtil
 *
 * @remarks
 * 检测给定值是否为 Arguments 对象类型；如果是，返回 true，否则返回 false。
 *
 * @example
 * 传入值为对象，返回 true。
 * ```
 * function test() {
 *    typeUtil.isArguments(arguments) // => true
 * };
 * ```
 * 传入值为非 Arguments 对象，返回 false。
 * ```
 * typeUtil.isArguments('') // => false
 * ```
 *
 * @param value - 指定的给定值
 * @returns Boolean
 * @defaultValue Boolean
 *
 * @public
 */

export const isArguments: any = (value: any) => {
  return Object.prototype.toString.call(value).slice(8, -1) === 'Arguments';
};
