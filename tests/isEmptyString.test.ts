import { isEmptyString } from '../src/string/isEmptyString';

// 测试套件
describe('string/isEmptyString 函数', () => {
  // 测试块
  test('str 参数不能为空', () => {
    // 预期
    expect(() => {
      isEmptyString();
    }).toThrow();
  });

  test('为 true 测试', () => {
    // 预期
    const str: string = '';
    expect(isEmptyString(str)).toBe(true);
  });

  test('为 true 测试，空格', () => {
    // 预期
    const str: string = ' ';
    expect(isEmptyString(str)).toBe(true);
  });

  test('为 true 测试，制表符', () => {
    // 预期
    const str: string = '\t';
    expect(isEmptyString(str)).toBe(true);
  });

  test('为 true 测试，换行符', () => {
    // 预期
    const str: string = '\n';
    expect(isEmptyString(str)).toBe(true);
  });

  test('为 true 测试，回车符', () => {
    // 预期
    const str: string = '\r';
    expect(isEmptyString(str)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const str: string = 'str';
    expect(isEmptyString(str)).toBe(false);
  });
});
