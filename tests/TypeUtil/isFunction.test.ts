import { isFunction } from '../../src/typeUtil/isFunction';

// 测试套件
describe('typeUtil/isFunction 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const func: Function = new Function();
    expect(isFunction(func)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const func: string = '';
    expect(isFunction(func)).toBe(false);
  });
});
