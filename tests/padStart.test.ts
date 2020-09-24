import { padStart } from '../src/string/padStart';

// 测试套件
describe('string/padStart 函数', () => {
  // 测试块
  test('str 参数不能为空', () => {
    // 预期
    expect(() => {
      padStart();
    }).toThrow();
  });

  test('len 参数不能为空', () => {
    // 预期
    const str: string = '1';
    expect(() => {
      padStart(str);
    }).toThrow();
  });

  test('默认填充选项值 (空格) 测试', () => {
    const str: string = '1';
    const len: number = 8;
    expect(padStart(str, len)).toBe('       1');
  });

  test('填充 0 测试', () => {
    const str: string = '1';
    const len: number = 8;
    const fillStr: string = '0';
    expect(padStart(str, len, fillStr)).toBe('00000001');
  });

  test('填充 * 测试', () => {
    const str: string = '1';
    const len: number = 8;
    const fillStr: string = '*';
    expect(padStart(str, len, fillStr)).toBe('*******1');
  });
});
