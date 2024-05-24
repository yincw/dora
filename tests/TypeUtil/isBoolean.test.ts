import { isBoolean } from '../../src/typeUtil/isBoolean';

// 测试套件
describe('typeUtil/isBoolean 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const bool: boolean = true;
    expect(isBoolean(bool)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const bool: string = '';
    expect(isBoolean(bool)).toBe(false);
  });
});
