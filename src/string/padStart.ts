/**
 * 字符串前置补全，eg: `'1' => '00000001'`
 *
 * @remarks
 * 字符串前置补全
 *
 * @example
 * ```js
 * padStart('1', 8)  // => '       1'
 * padStart('1', 8, '0')  // => '00000001'
 * padStart('1', 8, '*')  // => '*******1'
 * ```
 *
 * @param str - 指定需补全的字符串
 * @param len - 补全后字符串长度
 * @param fillStr - 用于填充的字符串
 * @returns string
 *
 * @beta
 */

export const padStart: any = (str: string, len: number, fillStr: string) => {
  if (!str) throw new Error('padStart str 参数不能为空。');
  if (!len) throw new Error('padStart len 参数不能为空。');
  str = str.trim();
  fillStr = fillStr || ' ';

  for (let i = 0, leng = len - str.length; i < leng; i++) {
    str = fillStr + str;
  }

  return str;
};

/* ******
 * 参考文献
 ****** */
// - string.prototype.padStart()
