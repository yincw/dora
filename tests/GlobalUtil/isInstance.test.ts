import { isInstance } from '../../src/globalUtil/isInstance';

// 测试套件
describe('globalUtil/isInstance 函数', () => {
  // 测试块

  test('为 true 测试', () => {
    // 预期
    // function Person(name: any, age: any) {
    //   this.name = name;
    //   this.age = age;
    // }
    // const person = new Person('Rose', 18);
    // const arr: Array<number> = [];
    // expect(isInstance(person, Person)).toBe(true);
  });

  test('为 false 测试', () => {
    // 预期
    // function Person(name: any, age: any) {
    //   this.name = name;
    //   this.age = age;
    // }
    // var p1 = { name: 'a', age: 18 };
    // const arr: Array<number> = [];
    // expect(isInstance(p1, Person)).toBe(false);
  });
});
