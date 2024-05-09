# dora

<!-- ## 介绍 -->

Dora：一个 JavaScript 工具库，使用 TypeScript 编写的。

<!-- ## 特色 -->

-

## 使用方式

ES Modules 规范用法：

```js
import Dora from '@yincw/dora';
let obj = {};
Dora.TypeUtil.isObject(obj); // true

// 或

import TypeUtil from '@yincw/dora/TypeUtil';
TypeUtil.isObject(obj); // true

// 或

import { isObject } from '@yincw/dora/TypeUtil/isObject';
isObject(obj); // true
```

CommonJS 规范用法：

```js
var Dora = require('@yincw/dora');
let obj = {};
Dora.TypeUtil.isObject(obj); // true

// 或
var Dora = require('@yincw/dora/TypeUtil');
TypeUtil.isObject(obj); // true

// 或
var isObject = require('@yincw/dora/TypeUtil/isObject');
isObject(obj); // true
```

AMD 规范用法：

```html
<!-- index.html -->
<script src="./require.js" data-main="./main.js"></script>
```

```js
// main.js
define(['@yincw/dora/TypeUtil/index.js'], function (TypeUtil) {
  'use strict';

  let obj = {};
  TypeUtil.isObject(obj); // true
});
```

Script 全量引入：

```html
<!-- index.html -->
<script src="/dist/dora.umd.min.js"></script>
```

```js
// main.js
let obj = {};
dora.TypeUtil.isObject(obj); // true
```
## 功能分类

- **数据结构处理**
  - **TypeUtil** - 类型检测
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
  - FunctionUtil - 函数
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
  - GraphUtil - 图形、画布、WebGL
  - ImageUtil - 图片
  - TableUtil - 表格
  - CalendarUtil - 日历

## 开发

通过自动化 **生成/移除** 命令会 **创建/移除** 对应的 源码样板及测试用例样板。

- **生成**：会在 src 和 tests 下创建对应目录及文件，并且，src 目录 index.ts 文件会自动导入导出函数
- **移除**：会移除 src 和 tests 目录对应的样板文件；且 src 目录下 index.ts 引用会自动更新

```js
// 自动生成样板
npm run gen type isObject
// 自动移除样板
npm run del type isObject

// 开发
npm run dev
```

构建

```js
// 构建
npm run build
```

测试

```js
// 测试覆盖率查看
npm run test:coverage

// 单元测试
npm run test

// 端对端测试
npm run test:e2e
```

根据注释生成 API 文档

```js
// 构建
npm run docs:build
```

## 支持

- 微信
- 支付宝

## LICENSE

MIT
