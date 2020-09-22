/**
 * 判断给定字符串是否为空
 *
 * @remarks
 * 判断给定字符串是否为空，若为空，返回 ture，否则返回 false。
 *
 * @example
 * 给定字符串是否为空，支持下列形式：
 * ```js
 * isEmptyString(''); // true
 * isEmptyString(' ');  // 空格 true
 * isEmptyString('\t');  // 制表符 true
 * isEmptyString('\n');  // 换行符 true
 * isEmptyString('\r');  // 回车符 true
 * isEmptyString('str');  // false
 * ```
 *
 * @param str - 指定的字符串
 * @returns true || false
 *
 * @public
 */

export const isEmptyString: any = (str: string) => {
  if (str.match(/^\s*$/)) {
    return true;
  }
  return false;
};

/* ******
 * 参考文献
 ****** */
// -
