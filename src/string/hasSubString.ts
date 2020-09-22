/**
 * 判断字符串是否包含指定的子字符串
 *
 * @remarks
 * 字符串是否包含指定的子字符串，若包含，返回 ture，否则返回 false。
 *
 * @example
 * ```js
 * hasSubString('foo', 'oo'); // true
 * hasSubString('foo', 'ee'); // false
 * ```
 *
 * @param str - 指定的字符串
 * @param subString - 是否包含的子字符串
 * @returns true || false
 *
 * @public
 */

export const hasSubString: any = (str: string, subString: string) => {
  if (!str) throw new Error('str 参数不能为空。');
  return str.indexOf(subString) !== -1;
};

/* ******
 * 参考文献
 ****** */
// -
