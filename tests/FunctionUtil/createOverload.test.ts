import { createOverload } from '../../src/functionUtil/createOverload';

// 测试套件
describe('functionUtil/createOverload 函数', () => {
  // 测试块
  test('查询所有用户', () => {
    // 预期
    const getUsers = createOverload();

    getUsers.addImpl(function () {
      return '查询所有用户';
    });
    getUsers.addImpl(function () {
      return 'xxxx 查询所有用户';
    });

    const arr: Array<number> = [];
    expect(getUsers()).toBe('xxxx 查询所有用户');
  });
  // 测试块
  test('参数测试', () => {
    // 预期
    const getUsers = createOverload({
      useFirst: true, // 为 true 时意味着，如果有多次相同的重载实现，则使用第一次的重载实现函数，否则，使用最后一次定义的重载实现函数
    });

    getUsers.addImpl(function () {
      return '查询所有用户';
    });
    getUsers.addImpl(function () {
      return 'xxxx 查询所有用户';
    });
    const arr: Array<number> = [];
    expect(getUsers()).toBe('查询所有用户');
  });
});
