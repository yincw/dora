import { is } from '../../src/TypeUtil/is';

// 测试套件
describe('TypeUtil/is 函数', () => {
  // 测试块
  test('Boolean 类型测试', () => {
    // 预期
    const bool: boolean = true;
    expect(is(bool)).toBe('Boolean');
  });

  test('Number 类型测试', () => {
    // 预期
    const num: number = 1;
    expect(is(num)).toBe('Number');
  });

  // 测试块
  test('String 类型测试', () => {
    // 预期
    const str: string = 'abc';
    expect(is(str)).toBe('String');
  });
});
