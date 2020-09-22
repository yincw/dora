/**
 * 字符串前置补全，eg: '1' -> '0001'
 *
 * @remarks
 * 字符串前置补全
 *
 * @example
 * ```js
 * padStart('1', 8, '0')  // '00000001'
 * padStart('1', 8, '*')  // '*******1'
 * ```
 *
 * @param dataSource - DESCRIPTION
 * @param options - DESCRIPTION
 * @returns string
 *
 * @beta
 */

export const padStart: any = (str: string, len: number, fillStr: string) => {
  fillStr = fillStr || ' ';
  if (!str) throw new Error('str 参数不能为空。');
  if (!len) throw new Error('len 参数不能为空。');

  // return ;
};

/* ******
 * 参考文献
 ****** */
// -
