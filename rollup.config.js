import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import pkg from './package.json';

const banner = `/*!* ${pkg.name.split('/').slice(-1)}.js v${pkg.version} \n * (c) 2019-${new Date().getFullYear()} ${
  pkg.author
} \n * Released under the MIT License. \n */`;

export default {
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      banner,
      file: pkg.main,
    },
    {
      format: 'es',
      banner,
      file: pkg.module,
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
  plugins: [
    typescript(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
    json(),
    commonjs(),
    nodeResolve(),
  ],
};
