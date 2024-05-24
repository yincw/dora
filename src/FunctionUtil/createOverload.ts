/**
 * 函数重载
 *
 * @remarks
 * 函数重载：常用于同一函数根据参数类型及个数调用不同的实现
 *
 * @example
 * 常见一个函数，根据传入不同数量的参数及不同的参数类型调用不同的函数实现。
 * ```
 * const getUsers = functionUtil.createOverload({
 *   useFirst: true, // 为 true 时意味着，如果有多次相同的重载实现，则使用第一次的重载实现函数，否则，使用最后一次定义的重载实现函数
 * });
 * getUsers.addImpl(function () {
      console.log('查询所有用户');
    });
    getUsers.addImpl(function () {
      console.log('xxxx 查询所有用户');
    });
    const searchPage = function (page, pageSize = 10) {
      console.log('按照【页码】和【数量】查询用户');
    }
    getUsers.addImpl('number', searchPage);
    getUsers.addImpl('number', 'number', searchPage);

    getUsers.addImpl('string', function () {
      console.log('按照【姓名】查询用户');
    });

    getUsers.addImpl('string', 'string', function () {
      console.log('按照【性别】查询用户');
    });
 *
 * 调用：
 * getUsers(); // 查询所有用户
 * getUsers(1); // 按照【页码】和【数量】查询用户
 * getUsers(1, 20); // 按照【页码】和【数量】查询用户
 * getUsers('a'); // 按照【姓名】查询用户
 * getUsers('a', 'b'); // 按照【性别】查询用户
 * ```
 *
 * @param options - 选项，useFirst：true 为 true 时意味着，如果有多次相同的重载实现，则使用第一次的重载实现函数
 * @returns function
 * @defaultValue ANY
 *
 * @public
 */

export const createOverload: any = function (options: any) {
  // 创建一个 Map，用于存储重载函数的签名（参数类型及数量）和实现，一一对应
  // [{ key: '', value: () => {} }]
  const callMap = new Map();

  // 定义重载函数
  function overload(this: any, ...args: any[]) {
    // 根据 Arguments 对象 获取参数类型及数量组成的 key，例如：'string,number'
    // 入参仅支持如下类型：undefined、boolean、number、string、function
    const key = args.map((arg) => typeof arg).join(',');
    // 根据 key 从 Map 获取重载函数实现
    const fn = callMap.get(key);

    // 如果重载函数实现存在，则传入参数并调用
    if (fn) {
      return fn.apply(this, args);
    }
    // 如果入参非法（未定义签名和实现），则抛出错误
    throw new Error('no matching function');
  }

  // 添加实现 implementation
  overload.addImpl = function (...args: any[]) {
    // 弹出最后一个参数，作为重载函数实现
    const fn = args.pop();

    // 如果该参数不是函数，直接返回
    if (typeof fn !== 'function') {
      return;
    }

    // 获取 addImpl 的其他参数（已排除最后一个参数）
    // 并拼接成 key 格式，例如：'string,number'
    const key = args.join(',');
    // const types = args;
    // const key = types.join(',');

    // 如果 createOverload 函数存在选项，且 useFirst 为 true，且 key 在 Map 内存在
    // 则直接返回：这意味着如果有多次相同的重载实现，则使用第一次的重载实现函数
    if (options?.useFirst && callMap.has(key)) {
      return;
    }
    // 否则，添加到 Map
    callMap.set(key, fn);
  };

  // 返回重载函数
  return overload;
};
