import { isEmptyObject } from '../src/object/isEmptyObject';

// 测试套件
describe('object/isEmptyObject 函数', () => {
  // 测试块
  test('为 true 测试', () => {
    // 预期
    var obj = {};
    expect(isEmptyObject(obj)).toBe(true);
  });
  test('为 false 测试', () => {
    // 预期
    var obj = {
      a: 'a',
    };
    expect(isEmptyObject(obj)).toBe(false);
  });
});
