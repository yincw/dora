import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import pkg from './package.json';

const banner = `/*!* ${pkg.name.split('/').slice(-1)}.js v${pkg.version} \n * (c) 2019-${new Date().getFullYear()} ${pkg.author} \n * Released under the MIT License. \n */`;


export default {
    input: 'src/index.ts',
    output: [{
        format: 'cjs',
        banner,
        file: pkg.main
    },
    {
        format: 'es',
        banner,
        file: pkg.module
    },{
        format: 'umd',  // umd, iife
        name: 'dora',
        banner,
        file: pkg.browser.split('.')[0] + '.js'
    }],
    plugins: [
        typescript(),
        json(),
        nodeResolve(),
    ]

}