import { isRegExp } from '../../src/typeUtil/isRegExp';

// 测试套件
describe('typeUtil/isRegExp 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const reg: RegExp = /\w/g;
    expect(isRegExp(reg)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const reg: string = '';
    expect(isRegExp(reg)).toBe(false);
  });
});
