const fs = require('fs');

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


////////////////////
// 生成
////////////////////

if (!dirName || !fileName) {

    console.log('\033[40;31m × dirName 和 fileName 不能为空！\n \033[0m');
    console.log('\033[40;37m 示例：\n \033[40;32m\n - npm run gen `dirName` `fileName` \033[0m');
    process.exit();
    
} else {

    let dirNameFlag = dirName.toLowerCase();

    ////////////////////
    // 模板
    ////////////////////

    // 方法文件
    const tsTemp = `export const ${fileName}:any = (dataSource, options) => {
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
        console.log('\033[40;32m' + ` √ src/${dirName}/${fileName}.ts 函数样板创建成功；` + '\033[0m');
    
        process.chdir(`../../__tests__`);
        fs.writeFileSync(`${fileName}.test.ts`, testTemp);
        console.log('\033[40;32m' + ` √ __test__/${fileName}.test.ts 测试用例样板创建成功。` + '\033[0m');
    }
    
    // 检查文件是否存在，若存在则不创建
    fs.access(`./src/${dirName}/${fileName}.ts`, (err) => {
        // err： null  存在
        if (!err) {
            console.log('\033[40;33m * 文件存在，不能重复创建！ \n \033[0m');
            process.exit();
        } else {
            dirArr.forEach( (item) => {
                if (dirNameFlag === item) {
                    gen(item, fileName);
                }
            });
        
            let include = dirArr.some( (item) => {
                return dirNameFlag  === item;
            });
            if (!include) {
                console.log('\033[40;33m × 样板创建失败！\n \033[0m');
                console.log('\033[40;37m 示例：\n \033[40;32m\n - npm run gen `dirName` `fileName` \033[0m');
                console.log('\033[40;37m \n dirName 必须是以下值中的一个：\n \033[40;32m\n - string \n - date \n - number \n - math \n - object \n - array \n - function \n - rule \n - lang \n - helper \033[0m');
            }
            
        }
    });

}
