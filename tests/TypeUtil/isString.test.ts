import { isString } from '../../src/TypeUtil/isString';

// 测试套件
describe('TypeUtil/isString 函数', () => {
  // 测试块
  test('数据源参数不能为空', () => {
    // 预期
    expect(() => {isString()}).toThrow();
  });
});
