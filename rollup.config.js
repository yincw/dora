import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import pkg from './package.json';
// import pkg from './package.json' assert { type: "json" };

const banner = `/*!* ${pkg.name.split('/').slice(-1)}.js v${pkg.version} \n * (c) 2020-${new Date().getFullYear()} ${
  pkg.author
} \n * Released under the MIT License. \n */`;

// es: 将 bundle 保留为 ES 模块文件，适用于其他打包工具，以及支持 <script type=module> 标签的浏览器。（别名：esm，module）
// system: SystemJS 模块加载器的原生格式（别名：systemjs）
// ✅amd: 异步模块加载，适用于 RequireJS 等模块加载器
// ✅cjs: CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
// ✅iife: 自执行函数，适用于 <script> 标签（如果你想为你的应用程序创建 bundle，那么你可能会使用它）。iife 表示“自执行 函数表达式”
// ✅umd: 通用模块定义规范，同时支持 amd，cjs 和 iife
export default {
  input: 'src/index.ts',
  output: [
    // {
    //   format: 'system',
    //   banner,
    //   file: pkg.system,
    // },
    // {
    //   format: 'es',
    //   banner,
    //   file: pkg.module,
    // },
    // {
    //   format: 'cjs',
    //   exports: 'auto',
    //   banner,
    //   file: pkg.main,
    // },
    {
      format: 'umd',
      name: 'dora',
      exports: 'named',
      banner,
      file: pkg.browser.split('.')[0] + '.js',
      sourcemap: true,
    },
    {
      format: 'umd',
      name: 'dora',
      exports: 'named',
      banner,
      file: pkg.browser,
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
      sourcemap: true,
    },
  ],
  external: ['core-js'],
  plugins: [
    resolve({
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({
      module: 'ES2015',
      sourceMap: true,
    }),
    babel({
      // babelHelpers: 'bundled',
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    json(),
  ],
};
