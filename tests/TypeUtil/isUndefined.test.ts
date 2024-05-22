import { isUndefined } from '../../src/TypeUtil/isUndefined';

// 测试套件
describe('TypeUtil/isUndefined 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const text = undefined;
    expect(isUndefined(text)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const text: boolean = true;
    expect(isUndefined(text)).toBe(false);
  });
});
