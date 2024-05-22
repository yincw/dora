import { isNotEmpty } from '../../src/StringUtil/isNotEmpty';

// 测试套件
describe('StringUtil/isNotEmpty 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const str: string = 'abc';
    expect(isNotEmpty(str)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const str: string = '';
    expect(isNotEmpty(str)).toBe(false);
  });
});
