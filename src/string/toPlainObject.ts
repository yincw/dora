/**
 * 解析 URL，将 URL 中的查询字符串，域等信息以纯对象的形式展示，eg: `'key1=value1&key2=value2' => {key1: value1, key2: value2}`
 *
 * @remarks
 * 解析 URL，将URL 中的查询字符串，域等信息以纯对象的形式展示，方便获取使用
 *
 * @example
 * ```js
 * toPlainObject()  // => 当前 URL 解析对象
 * toPlainObject('https://www.baidu.com?key1=value1&key2=value2')  // => {key1: value1, key2: value2, location: {origin: 'https://www.baidu.com', ...}}
 * toPlainObject('key1=value1&key2=value2')  // => {key1: value1, key2: value2, location: null }
 * ```
 *
 * @param url - 指定的 url 字符串
 * @returns string
 *
 * origin: protocol hostname port
 * host: hostname port
 * search
 * href: origin pathname search
 * hash
 *
 * @beta
 */
import { hasSubString } from './hasSubString';

interface resultObj {
  location?: object;
}

export const toPlainObject: any = (url: string) => {
  let obj: resultObj = {};

  if (url === undefined) {
    url = window.location.search;
    obj.location = window.location;
  }

  // window.location.search = ''
  if (!url) {
    return obj;
  }

  // eg: url = window.location.search || URL string
  if (hasSubString(url, '?')) {
    let arr = url.split('?');

    console.log('arr', arr);

    return decodeURIComponent(url)
      .replace(/()()()()()/g, (item) => {
        obj.location = {};
        return item;
      })
      ?.match(/([^?=&]+)=([^&]*)/g)
      ?.reduce(
        (prev: any, current: any) => (
          (prev[current.slice(0, current.indexOf('='))] = current.slice(current.indexOf('=') + 1)), prev
        ),
        obj,
      );
  }

  // eg: url = 'key1=value1&key2=value2'
  return decodeURIComponent(url)
    .match(/([^?=&]+)=([^&]*)/g)
    ?.reduce(
      (prev: any, current: any) => (
        (prev[current.slice(0, current.indexOf('='))] = current.slice(current.indexOf('=') + 1)), prev
      ),
      obj,
    );
};

/* ******
 * 参考文献
 ****** */
// - https://github.com/ljharb/qs
// - https://github.com/sindresorhus/query-string
