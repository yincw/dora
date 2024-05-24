import { isArray } from '../../src/typeUtil/isArray';

// 测试套件
describe('typeUtil/isArray 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const arr: Array<number> = [];
    expect(isArray(arr)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const arr: string = '';
    expect(isArray(arr)).toBe(false);
  });
});
