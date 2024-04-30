// import { nodeResolve } from '@rollup/plugin-node-resolve';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';

const banner = `/*!* ${pkg.name.split('/').slice(-1)}.js v${pkg.version} \n * (c) 2019-${new Date().getFullYear()} ${
  pkg.author
} \n * Released under the MIT License. \n */`;

const NODE_ENV = process.env.NODE_ENV; // 环境变量
const isProd = NODE_ENV === 'production';
let envPlugins = [];
if (isProd) {
  envPlugins = [terser()];
} else {
  envPlugins = [
    serve({
      host: 'localhost', //
      port: 3000, // 端口号
      open: true, // 是否打开浏览器
      contentBase: './', // 入口 html 文件位置
      historyApiFallback: true, // 设置为 true 返回 index.html 而不是 404
    }),
    livereload(),
  ];
}
// es: 将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 <script type=module> 标签的浏览器。（别名：esm，module）
// amd: 异步模块加载，适用于 RequireJS 等模块加载器
// cjs: CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
// iife: 自执行函数，适用于 <script> 标签（如果你想为你的应用程序创建 bundle，那么你可能会使用它）。iife 表示“自执行 函数表达式”
// umd: 通用模块定义规范，同时支持 amd，cjs 和 iife
// system: SystemJS 模块加载器的原生格式（别名：systemjs）
export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'es',
      banner,
      file: pkg.module,
    },
    {
      format: 'system',
      banner,
      file: pkg.system,
    },
    {
      format: 'cjs',
      exports: 'auto',
      banner,
      file: pkg.main,
    },
    {
      format: 'umd', // umd, iife
      name: 'dora',
      banner,
      file: pkg.browser.split('.')[0] + '.' + pkg.browser.split('.')[1] + '.js',
    },
    {
      format: 'umd', // umd, iife
      name: 'dora',
      banner,
      plugins: [
        terser({
          compress: {
            drop_console: true,
          },
          format: {
            comments: /^!/,
          },
        }),
      ],
      file: pkg.browser,
    },
  ],
  external: ['core-js'],
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
    commonjs(),
    json(),
    resolve(),
    // nodeResolve({
    //   modulesOnly: false,
    //   extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    // }),
    ...envPlugins,
  ],
};
