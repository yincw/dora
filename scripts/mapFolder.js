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
  let dirItemNames = []; // 目录名称组成的数组
  let indexTemps = []; // index.ts 模板

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
  dirArrs.forEach((dirItem) => {
    dirItemNames.push(dirItem.name);

    // src/index.ts
    const indexTemp = `import ${dirItem.name} from '${dirItem.path}/index';\n`;
    indexTemps.push(indexTemp);

    // 以 file 模式迭代 src 子目录 里的文件
    const fileArrs = map('src/' + dirItem.name, 'file');

    // src/*Util/index.ts
    let fileItemNames = []; // 目录名称组成的数组
    let fileTemps = []; // *Util.ts 模板
    let exportFileTemps = []; // *Util.ts 模板 export {}
    fileArrs.forEach((fileItem) => {
      if (fileItem.name !== 'index') {
        fileItemNames.push(fileItem.name);

        // 1. 以对象方式导出
        // import { tree2 } from './ObjectUtil/tree2';
        // const fileTemp = `import { ${fileItem.name} } from '${fileItem.path}';\n`;

        // import { tree2 } from './tree2';
        const fileTemp = `import { ${fileItem.name} } from './${fileItem.name}';\n`;
        fileTemps.push(fileTemp);

        // 以方法方式导出
        // export { tree2 } from './ObjectUtil/tree2';
        // const exportFileTemp = `export { ${fileItem.name} } from '${fileItem.path}';\n`;

        // src/*Util/index.ts
        // export { tree2 } from './tree2';
        const exportFileTemp = `export { ${fileItem.name} } from './${fileItem.name}';\n`;
        exportFileTemps.push(exportFileTemp);
      }
    });
    // 2. 以对象方式导出
    // export default { tree2 };
    exportFileTemps.push(`\nexport default {\n${fileItemNames.join(',\n')}\n};`);
    fs.writeFileSync(`src/${dirItem.name}/index.ts`, fileTemps.join('') + '\n' + exportFileTemps.join('')); // 以对象 + 方法方式导出
    console.log('\033[88;32m' + ` √ src/${dirItem.name}/index.ts 更新成功。\n` + '\033[0m');

    // 在外层以对象形式导出
    // fileTemps.push(`export default {\n${fileItemNames.join(',\n')}\n};`);
    // fs.writeFileSync(`src/${dirItem.name}.ts`, fileTemps.join('')); // 以对象方式导出
    // console.log('\033[88;32m' + ` √ src/${dirItem.name}.ts 更新成功。\n` + '\033[0m');
  });

  if (indexTemps.length > 0) {
    indexTemps.push(`\nexport default {\n${dirItemNames.join(',\n')}\n};`);
  }
  fs.writeFileSync('src/index.ts', indexTemps.join(''));
  console.log('\033[88;32m' + ` √ src/index.ts 更新成功。\n` + '\033[0m');

  process.exit();
};
