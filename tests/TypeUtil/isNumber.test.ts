import { isNumber } from '../../src/TypeUtil/isNumber';

// 测试套件
describe('TypeUtil/isNumber 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const num: number = 1;
    expect(isNumber(num)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const num: string = '';
    expect(isNumber(num)).toBe(false);
  });
});
