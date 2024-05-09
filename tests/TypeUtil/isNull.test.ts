import { isNull } from '../../src/TypeUtil/isNull';

// 测试套件
describe('TypeUtil/isNull 函数', () => {
  // 测试块
  test('数据源参数不能为空', () => {
    // 预期
    expect(() => {isNull()}).toThrow();
  });
});
