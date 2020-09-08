export const isEmptyString: any = (dataSource: any, options: any) => {
  if (!dataSource) throw new Error('isEmptyString 数据源参数不能为空。');
  dataSource.fill('*');
  // return ;
};

/* ******
 * 参考文献
 ****** */
// -
