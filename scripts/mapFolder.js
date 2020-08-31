const fs = require('fs');
const path = require('path');

const mapDir = (dirPath, cb) => {
  fs.readdirSync(dirPath).forEach((name) => {
    var filePath = path.join(dirPath, name);
    var stat = fs.statSync(filePath);

    if (stat.isFile()) {
      cb(filePath, stat);
    } else if (stat.isDirectory()) {
      mapDir(filePath, cb);
    }
  });
};

exports.mapFolder = function () {
  let filePathArrs = [];
  let exportArrs = [];

  mapDir('src', (filePath, stat) => {
    let fPath = filePath.slice(4).replace(/\\/g, '/').split('.')[0];
    let fName = fPath.split('/').slice(-1)[0].split('.')[0];
    let obj = {
      name: fName,
      path: './' + fPath,
    };

    if (fPath !== 'index') {
      filePathArrs.push(obj);
    }
  });
  filePathArrs.forEach((item) => {
    let indexTemp = `export { ${item.name} } from '${item.path}';\n`;
    exportArrs.push(indexTemp);
  });

  fs.writeFileSync('src/index.ts', exportArrs.join(''));
  console.log('\033[88;32m' + ` √ src/index.ts 更新成功。\n` + '\033[0m');
  process.exit();
};
