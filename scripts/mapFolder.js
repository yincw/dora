const fs = require('fs');
const path = require('path');

// 模式：file: 文件，directory: 目录，both：两者
const map = (dirPath, mode = 'directory') => {
  let arrs = [];

  fs.readdirSync(dirPath).forEach((name) => {
    var filePath = path.join(dirPath, name);
    var stat = fs.statSync(filePath);

    let fPath = filePath.slice(4).replace(/\\/g, '/').split('.')[0];
    let fName = fPath.split('/').slice(-1)[0].split('.')[0];

    var obj = {
      id: fName,
      pId: mode === 'directory' ? '#' : fPath.split('/')[0],
      isDir: stat.isDirectory(),
      name: fName, // 文件名，函数名
      path: './' + fPath, // 文件引用路径，相对 src 目录
    };

    if (mode === 'directory' && stat.isDirectory()) {
      arrs.push(obj);
    } else if (mode === 'file' && stat.isFile()) {
      arrs.push(obj);
    } else if (mode === 'both') {
      arrs.push(obj);
    }
  });

  return arrs;
};

// 递归文件夹
// const mapDir = (dir, cb) => {
//   fs.readdirSync(dir).forEach((name) => {
//     var filePath = path.join(dir, name);
//     var stat = fs.statSync(filePath);

//     if (stat.isFile()) {
//       cb(filePath, stat.isFile());
//     } else if (stat.isDirectory()) {
//       mapDir(filePath, cb);
//       cb(filePath, stat.isFile());
//     }
//   });
// };

exports.mapFolder = function () {
  // 递归 src
  // let pathArrs = [];
  // mapDir('src', (paths, isFile) => {
  //   let fPath = paths.slice(4).replace(/\\/g, '/').split('.')[0];
  //   let fName = fPath.split('/').slice(-1)[0].split('.')[0];

  //   var obj = {
  //     name: fName, // 文件名，函数名
  //     path: './' + fPath, // 文件引用路径，相对 src 目录
  //     isFile: isFile,
  //   };

  //   非 index 文件
  //   if (fName !== 'index') {
  //     pathArrs.push(obj);
  //   }
  // });
  // console.log('pathArrs', pathArrs);

  // 以 directory 模式迭代 src 子目录
  const dirArrs = map('src');
  let dirItemNames = []; // 目录名称组成的数组
  let indexTemps = []; // src/index.ts 模板
  let exportIndexTemps = []; // src/index.ts 模板
  dirArrs.forEach((dirItem) => {
    dirItemNames.push(dirItem.name);

    // src/index.ts
    const indexTemp = `import ${dirItem.name} from '${dirItem.path}/index';\n`;
    indexTemps.push(indexTemp);

    // 以 file 模式迭代 src 子目录 里的文件
    const fileArrs = map('src/' + dirItem.name, 'file');
    // src/*Util/index.ts
    let fileItemNames = []; // 目录名称组成的数组
    let fileTemps = []; // src/*Util/index.ts 模板
    fileArrs.forEach((fileItem) => {
      if (fileItem.name !== 'index') {
        fileItemNames.push(fileItem.name);

        // src/index.ts
        const exportFileTempOutside = `export { ${fileItem.name} } from '${fileItem.path}';\n`; // 以方法方式导出
        exportIndexTemps.push(exportFileTempOutside);

        // src/*Util/index.ts
        const fileTemp = `import { ${fileItem.name} } from './${fileItem.name}';\n`; // 1. 以对象方式导出
        fileTemps.push(fileTemp);
      }
    });

    // src/*Util/index.ts
    // 提供给 src/index.ts 使用
    fileTemps.push(`\nexport default {\n${fileItemNames.join(',\n')}\n};`); // 2. 以对象方式导出
    fs.writeFileSync(`src/${dirItem.name}/index.ts`, fileTemps.join(''));
    console.log('\033[88;32m' + ` √ src/${dirItem.name}/index.ts 更新成功。\n` + '\033[0m');
  });

  // src/index.ts
  // 模块化用法 isNull()
  indexTemps.push(`\n${exportIndexTemps.join('')}\n`);
  if (indexTemps.length > 0) {
    // 对象用法 Dora.typeUtil.isNull()
    indexTemps.push(`export default {\n${dirItemNames.join(',\n')}\n};`);
  }
  fs.writeFileSync('src/index.ts', indexTemps.join(''));
  console.log('\033[88;32m' + ` √ src/index.ts 更新成功。\n` + '\033[0m');

  process.exit();
};
