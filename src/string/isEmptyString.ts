export const isEmptyString: any = (dataSource: any, options: any) => {
  if (!dataSource) throw new Error('isEmptyString 数据源参数不能为空。');
  // return ;
  dataSource.fill('*');
};

/* ******
 * 参考文献
 ****** */
// -
