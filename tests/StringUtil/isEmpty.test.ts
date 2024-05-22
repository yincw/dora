import { isEmpty } from '../../src/StringUtil/isEmpty';

// 测试套件
describe('StringUtil/isEmpty 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const str: string = '';
    expect(isEmpty(str)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const str: string = 'abc';
    expect(isEmpty(str)).toBe(false);
  });
});
