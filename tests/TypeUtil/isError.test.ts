import { isError } from '../../src/TypeUtil/isError';

// 测试套件
describe('TypeUtil/isError 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const err: Error = new Error();
    expect(isError(err)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const err: string = '';
    expect(isError(err)).toBe(false);
  });
});
