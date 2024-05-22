import { isDate } from '../../src/TypeUtil/isDate';

// 测试套件
describe('TypeUtil/isDate 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    const date: Date = new Date();
    expect(isDate(date)).toBe(true);
  });
  // 测试块
  test('为 false 测试', () => {
    // 预期
    const date: string = '';
    expect(isDate(date)).toBe(false);
  });
});
