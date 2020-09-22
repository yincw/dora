import { padStart } from '../src/string/padStart';

// 测试套件
describe('string/padStart 函数', () => {
  // 测试块
  test('数据源参数不能为空', () => {
    // 预期
    expect(() => {padStart()}).toThrow();
  });
});
