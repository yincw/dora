import { hasSubString } from '../src/string/hasSubString';

// 测试套件
describe('string/hasSubString 函数', () => {
  // 测试块
  test('str 参数不能为空', () => {
    // 预期
    expect(() => {
      hasSubString();
    }).toThrow();
  });

  test('为 true 测试', () => {
    const str: string = 'foo';
    const subString: string = 'oo';
    expect(hasSubString(str, subString)).toBe(true);
  });

  test('为 false 测试', () => {
    const str: string = 'str';
    const subString: string = 'ee';
    expect(hasSubString(str, subString)).toBe(false);
  });
});
