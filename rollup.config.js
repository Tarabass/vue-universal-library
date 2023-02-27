import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'

const pkg = require('./package.json')

export default {
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({
      check: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json')
    }),
    postcss({
      extract: path.resolve('dist/vue-universal-library.min.css'),
      minimize: true
    }),
    terser()
  ],
  external: ['vue-demi'],
  input: ['src/index.ts'],
  output: [
    {
      exports: 'named',
      format: 'cjs',
      file: pkg.main,
      sourcemap: true
    },
    {
      format: 'es',
      file: pkg.browser,
      sourcemap: true
    },
    {
      format: 'umd',
      file: pkg.unpkg,
      sourcemap: true,
      name: 'VueUniversalLibrary',
      globals: {
        'vue-demi': 'VueDemi'
      }
    },
  ]
}