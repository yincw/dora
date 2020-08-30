const fs = require('fs');
const path = require('path');

const dirName = process.argv[2];
const fileName = process.argv[3];


const dirArr = [
    'string',
        'date',
    'number',
        'math',
    'object',
    'array',
    'function',
    'rule',
        'lang',
        'helper'
];

const mapFolder = (dirPath, cb) => {
    fs.readdirSync(dirPath).forEach( (name) => {
        var filePath = path.join(dirPath, name);
        var stat = fs.statSync(filePath);

        if (stat.isFile()) {
            cb(filePath, stat);
        } else if (stat.isDirectory()) {
            mapFolder(filePath, cb);
        }
    });
}

////////////////////
// 生成
////////////////////

if (!dirName || !fileName) {

    console.log('\033[88;31m × dirName 和 fileName 不能为空！\n \033[0m');
    console.log('\033[88;37m 示例：\n \033[88;32m - npm run gen `dirName` `fileName` \n \033[0m');
    process.exit();

} else {

    let dirNameFlag = dirName.toLowerCase();

    ////////////////////
    // 模板
    ////////////////////

    // 方法文件
    const tsTemp = `export const ${fileName}:any = (dataSource:any, options:any) => {
    if (!dataSource) throw new Error('${fileName} 数据源参数不能为空。');
    // return ;
};

/* ******
* 参考文献
****** */
// -
`;

    // 测试文件
    const testTemp = `import { ${fileName} } from '../src/${dirNameFlag}/${fileName}';

// 测试套件
describe('${dirNameFlag}/${fileName} 函数', () => {
    // 测试块
    test('数据源参数必填', () => {
        // 预期
        // expect(${fileName}()).toThrow();
    });

});
`;

    let gen = function (dirName, fileName) {

        try {
            let stat = fs.statSync(`./src/${dirName}`);
           } catch (error) {
            if (error.code === 'ENOENT') {
                fs.mkdirSync(`./src/${dirName}`); // mkdir $1
            }
        }

        process.chdir(`./src/${dirName}`);  // cd $1
        fs.writeFileSync(`${fileName}.ts`, tsTemp);
        console.log('\033[88;32m' + ` √ src/${dirName}/${fileName}.ts 函数样板创建成功；` + '\033[0m');

        process.chdir(`../../tests`);
        fs.writeFileSync(`${fileName}.test.ts`, testTemp);
        console.log('\033[88;32m' + ` √ __test__/${fileName}.test.ts 测试用例样板创建成功；` + '\033[0m');
    }

    let includeDir = dirArr.some( (item) => {
        return dirNameFlag  === item;
    });
    if (!includeDir) {
        console.log('\033[88;33m × 样板创建失败！\n \033[0m');
        console.log('\033[88;37m 示例：\n \033[88;32m - npm run gen `dirName` `fileName` \n \033[0m');
        console.log('\033[88;37m dirName 必须是以下值中的一个：\n \033[88;32m\n - string \n - date \n - number \n - math \n - object \n - array \n - function \n - rule \n - lang \n - helper \n \033[0m');
        process.exit();
    }

    // 检查文件是否存在，若存在则不创建
    fs.access(`./src/${dirName}/${fileName}.ts`, (err) => {
        // err： null  存在
        if (!err) {
            console.log('\033[88;33m * 文件存在，不能重复创建！\n \033[0m');
            process.exit();
        } else {
            dirArr.forEach( (item) => {
                if (dirNameFlag === item) {
                    gen(item, fileName);
                }
            });


            let filePathArrs = [];
            let exportArrs = [];

            process.chdir(`../`);
            mapFolder('src', (filePath, stat) => {
                let fPath = filePath.slice(4).replace(/\\/g, '/').split('.')[0];
                let fName = fPath.split('/').slice(-1)[0].split('.')[0];
                let obj = {
                    name: fName,
                    path: './' + fPath
                };

                if (fPath !== 'index') {
                    filePathArrs.push(obj);
                }
            });
            filePathArrs.forEach( (item) => {
                let indexTemp = `export { ${item.name} } from '${item.path}';\n`
                exportArrs.push(indexTemp);
            })

            fs.writeFileSync('src/index.ts', exportArrs.join(''));
            console.log('\033[88;32m' + ` √ src/index.ts 更新成功。\n` + '\033[0m');
            process.exit();

        }
    });

}
