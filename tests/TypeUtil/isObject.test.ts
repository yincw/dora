import { isObject } from '../../src/TypeUtil/isObject';

// 测试套件
describe('TypeUtil/isObject 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    var obj: object = {};
    expect(isObject(obj)).toBe(true);
    expect(isObject(new Object())).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    const str: string = '';
    const arr: Array<string> = [];
    expect(isObject(str)).toBe(false);
    expect(isObject(arr)).toBe(false);
  });
});
