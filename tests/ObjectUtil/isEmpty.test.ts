import { isEmpty } from '../../src/ObjectUtil/isEmpty';

// 测试套件
describe('ObjectUtil/isEmpty 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const obj: Object = {};
    expect(isEmpty(obj)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const obj: Object = { a: 'a' };
    expect(isEmpty(obj)).toBe(false);
  });
});
