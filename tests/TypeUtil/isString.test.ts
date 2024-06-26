import { isString } from '../../src/typeUtil/isString';

// 测试套件
describe('typeUtil/isString 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const text: string = '';
    expect(isString(text)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const text: boolean = true;
    expect(isString(text)).toBe(false);
  });
});
