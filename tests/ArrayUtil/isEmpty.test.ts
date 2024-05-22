import { isEmpty } from '../../src/ArrayUtil/isEmpty';

// 测试套件
describe('ArrayUtil/isEmpty 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const arr: Array<number> = [];
    expect(isEmpty(arr)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const arr: Array<number> = [1];
    expect(isEmpty(arr)).toBe(false);
  });
});
