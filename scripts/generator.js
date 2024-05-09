const fs = require('fs');
const path = require('path');
const { mapFolder } = require('./mapFolder');
const { capitalized } = require('./capitalized');

const mode = process.argv[2];
const dirName = process.argv[3];
const fileName = process.argv[4];

const dirNameUtil = capitalized(dirName) + 'Util';

const dirArr = [
  // 数据结构
  'type',
  'object',
  'array',
  'boolean',
  'number',
  'string',
  'money',
  'url',
  'json',

  // 内置功能
  'date',
  'timeline',
  'timer',
  'regexp',
  'function',
  'html',

  // 平台功能
  'platform',
  'directory',
  'file',
  'device',
  'storage',
  'screen',
  'encrypt',
  'log',

  // 组件功能
  'image',
  'table',
  'calendar',
  'graph',
];

var renderDirTip = function (dir) {
  return dir
    .map(function (item) {
      return `- ${item} \n`;
    })
    .join('');
};

////////////////////
// 生成
////////////////////

if (!dirName || !fileName) {
  console.log('\033[88;31m × dirName 和 fileName 不能为空！\n \033[0m');
  console.log('\033[88;37m 示例：\n \033[88;32m - npm run gen `dirName` `fileName` \n \033[0m');
  process.exit();
} else {
  let dirNameFlag = dirName.toLowerCase();
  let modeFlag = mode.split('=').slice(-1)[0].toLowerCase();

  ////////////////////
  // 模板
  ////////////////////

  // 方法文件
  const tsTemp = `/**
 * summary<placeholder>
 *
 * @remarks
 * details<placeholder>
 *
 * @example
 * explain<placeholder>
 * code<placeholder>
 *
 * @param dataSource - DESCRIPTION
 * @param options - DESCRIPTION
 * @returns ANY
 * @defaultValue ANY
 *
 * @internal -> @alpha -> @beta -> @public (single)
 */

export const ${fileName}: any = (dataSource: any, options: any) => {
  if (!dataSource) throw new Error('dataSource 参数不能为空。');
  // return ;
};

`;

  // 测试文件
  const testTemp = `import { ${fileName} } from '../../src/${dirNameUtil}/${fileName}';

// 测试套件
describe('${dirNameUtil}/${fileName} 函数', () => {
  // 测试块
  test('数据源参数不能为空', () => {
    // 预期
    expect(() => {${fileName}()}).toThrow();
  });
});
`;

  let gen = function (dirName, fileName) {
    try {
      fs.statSync(`./src/${dirNameUtil}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        fs.mkdirSync(`./src/${dirNameUtil}`); // mkdir $1
      }
    }
    try {
      fs.statSync(`./tests/${dirNameUtil}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        fs.mkdirSync(`./tests/${dirNameUtil}`); // mkdir $1
      }
    }

    process.chdir(`./src/${dirNameUtil}`); // cd $1
    fs.writeFileSync(`${fileName}.ts`, tsTemp);
    console.log('\033[88;32m' + ` √ src/${dirNameUtil}/${fileName}.ts 函数样板创建成功；` + '\033[0m');

    process.chdir(`../../tests/${dirNameUtil}`);
    fs.writeFileSync(`${fileName}.test.ts`, testTemp);
    console.log('\033[88;32m' + ` √ tests/${dirNameUtil}/${fileName}.test.ts 测试用例样板创建成功；` + '\033[0m');
  };

  let includeDir = dirArr.some((item) => {
    return dirNameFlag === item;
  });
  if (!includeDir) {
    console.log('\033[88;33m × 样板创建失败！\n \033[0m');
    console.log('\033[88;37m 示例：\n \033[88;32m - npm run gen `dirName` `fileName` \n \033[0m');
    console.log('\033[88;37m dirName 必须是以下值中的一个：\n \033[88;32m\n' + renderDirTip(dirArr) + ' \033[0m');
    process.exit();
  }

  // 检查文件是否存在，若存在则不创建
  fs.access(`./src/${dirNameUtil}/${fileName}.ts`, (err) => {
    // err： null  存在
    if (!err) {
      if (modeFlag === 'del') {
        fs.unlinkSync(`./src/${dirNameUtil}/${fileName}.ts`);
        // fs.unlinkSync(`./src/${dirNameUtil}.ts`);
        fs.unlinkSync(`./tests/${dirNameUtil}/${fileName}.test.ts`);
        console.log('\033[88;32m' + ` √ src/${dirNameUtil}/${fileName}.ts 删除成功；` + '\033[0m');
        // console.log('\033[88;32m' + ` √ src/${dirNameUtil}.ts 删除成功；` + '\033[0m');
        console.log('\033[88;32m' + ` √ src/index.ts 删除成功；` + '\033[0m');
        console.log('\033[88;32m' + ` √ tests/${dirNameUtil}/${fileName}.test.ts 删除成功；` + '\033[0m');
        process.chdir(`./`);
        mapFolder();
        process.exit();
      } else {
        console.log('\033[88;33m * 文件存在，不能重复创建！\n \033[0m');
        process.exit();
      }
    } else {
      dirArr.forEach((item) => {
        if (dirNameFlag === item) {
          gen(item, fileName);
        }
      });

      process.chdir(`../../`);
      mapFolder();
    }
  });
}
