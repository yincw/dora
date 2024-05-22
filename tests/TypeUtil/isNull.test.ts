import { isNull } from '../../src/TypeUtil/isNull';

// 测试套件
describe('TypeUtil/isNull 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const text = null;
    expect(isNull(text)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const text: string = '';
    expect(isNull(text)).toBe(false);
  });
});
