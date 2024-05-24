# @yincw/dora

<!-- ## 介绍 -->

<!-- logo -->
Dora：一个 JavaScript 通用函数工具库。包含：
1. **数据结构处理**：typeUtil、objectUtil、arrayUtil、stringUtil、numberUtil、booleanUtil、...
2. **内置功能扩展**：dateUtil、regexpUtil、functionUtil、...
3. **平台功能操作**：platformUtil、directoryUtil、fileUtil、deviceUtil、storageUtil、screenUtil、encryptUtil、logUtil、...
4. **组件功能提取**：imageUtil、graphUtil、tableUtil、calendarUtil、...

<!-- ## 特色 -->

## 使用

安装：

```js
// npm install --save @yincw/dora
npm i @yincw/dora
```

模块化用法：

```js
// ES Modules
import { isObject } from '@yincw/dora';
let obj = {};
isObject(obj); // => true
isObject(''); // => false

// CommonJS: Node.js 模块
const { isObject } = require('@yincw/dora');
var obj = {};
isObject(obj); // => true
isObject(''); // => false
```

AMD：Require.js 模块用法：

```html
<!-- index.html -->
<script src="./require.js" data-main="./main.js"></script>
```
```js
// main.js

// 方式一：方法维度
define(['../dist/typeUtil/isObject'], function (module) {
  var obj = {};
  console.log('isObject', module.isObject(obj)); // => true
});

// 方式一：方法组维度
define(['../dist/typeUtil/index'], function (module) {
  var typeUtil = module.default;
  var obj = {};
  console.log('typeUtil.isObject', typeUtil.isObject(obj)); // => true
  console.log('typeUtil.isNull', typeUtil.isNull(null)); // => true
});
```

全量引入：

```html
<!-- index.html -->
<script src="/dist/dora.min.js"></script>
<!-- <script src="/dist/dora.js"></script> -->
```
```js
// main.js
let obj = {};

// 方式一：命名空间-方法组维度
var Dora = dora.default;
Dora.typeUtil.isObject(obj); // => true
Dora.typeUtil.isNull(null); // => true

// 方式二：方法维度
dora.isObject(obj); // => true
```

## 功能分类

- **数据结构处理**
  - **typeUtil** - 类型检测
  - **ObjectUtil** - 对象
  - **ArrayUtil** - 数组
  - **BooleanUtil** - 布尔值
  - **NumberUtil** - 数值
  - **StringUtil** - 字符串值
    - MoneyUtil  - 金额
    - UrlUtil  - Url 解码，编码
    - JsonUtil  - JSON 解析，字符串化
- **内置功能**
  - DateUtil - 日期时间
    - TimelineUtil - 时间线
    - TimerUtil - 定时器
  - RegexpUtil - 正则
  - functionUtil - 函数
    - HtmlUtil - HTML 标签
- **平台功能**
  - PlatformUtil - 系统及平台
    - DirectoryUtil - 目录及路径
    - FileUtil - 文件
  - DeviceUtil - 设备
    - StorageUtil - 存储
    - ScreenUtil - 屏幕
  - EncryptUtil - 加密&解密
  - LogUtil - 日志
- **组件功能**
  - ImageUtil - 图片
  - GraphUtil - 图形、画布、WebGL
  - TableUtil - 表格
  - CalendarUtil - 日历

## 开发

通过样板命令，自动化创建对应的 源码样板及测试用例样板。

> 创建样板

会在 src 和 tests 下创建对应目录及文件，并且，src 目录 index.ts 文件会自动更新导入导出函数。

```js
// 自动生成样板
npm run gen type isObject
```

> 移除样板

会移除 src 和 tests 目录对应的样板文件；且 src 目录下 index.ts 引用会自动更新。

```js
// 自动移除样板
npm run del type isObject
```

其他命令：

```js
// 开发
npm run dev

// 构建
npm run build

// 单元测试
npm run test
// 测试覆盖范围
npm run test:coverage
// 端对端测试
npm run test:e2e

// 文档
npm run docs
```

## 支持

- 微信
- 支付宝

## LICENSE

MIT
