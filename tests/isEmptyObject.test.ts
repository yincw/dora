import { isEmptyObject } from '../src/object/isEmptyObject';

// 测试套件
describe('object/isEmptyObject 函数', () => {
  // 测试块
  test('obj 参数不能为空', () => {
    // 预期
    expect(() => {
      isEmptyObject();
    }).toThrow();
  });
  test('为 true 测试', () => {
    // 预期
    const obj: object = {};
    expect(isEmptyObject(obj)).toBe(true);
  });
  test('为 false 测试', () => {
    // 预期
    const obj: object = {
      a: 'a',
    };
    expect(isEmptyObject(obj)).toBe(false);
  });
});
