import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import sourceMaps from 'rollup-plugin-sourcemaps'
import ignore from 'rollup-plugin-ignore'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const cjs = {
  format: 'cjs',
  exports: 'named',
}

const commonPlugins = [
  json(),
  typescript({
    useTsconfigDeclarationDir: true,
    typescript: require('typescript'),
    clean: true,
  }),
  commonjs({
    ignoreGlobal: true,
  }),
  nodeResolve({
    module: true,
    main: true,
  }),
  sourceMaps(),
  replace({
    __DEV__: JSON.stringify(false),
  }),
]

const configBase = {
  input: 'src/index.tsx',
  external: ['react'].concat(
    Object.keys(pkg.dependencies),
    Object.keys(pkg.peerDependencies)
  ),
  plugins: commonPlugins,
  output: {
    globals: { react: 'React' },
    sourcemap: true,
  },
}

const umdBaseConfig = Object.assign({}, configBase, {
  output: Object.assign({}, configBase.output, {
    file: 'dist/bloomer.js',
    format: 'umd',
    name: 'Bloomer',
    exports: 'named',
  }),
  external: ['react'],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
    }),
    ignore(['stream'])
  ),
})

const umdConfig = Object.assign({}, umdBaseConfig, {
  plugins: umdBaseConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ),
})

const umdProdConfig = Object.assign({}, umdBaseConfig, {
  output: Object.assign({}, umdBaseConfig.output, {
    file: 'dist/bloomer.min.js',
  }),
  plugins: umdBaseConfig.plugins.concat([
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser(),
  ]),
})

const serverConfig = Object.assign({}, configBase, {
  external: configBase.external.concat('stream'),
  output: [
    Object.assign({}, configBase.output, {
      file: 'dist/bloomer.es.js',
      format: 'es',
    }),
    Object.assign({}, configBase.output, cjs, { file: 'dist/bloomer.cjs.js' }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(true),
    })
  ),
})

const serverProdConfig = Object.assign({}, configBase, serverConfig, {
  output: [
    { file: 'dist/bloomer.es.min.js', format: 'es' },
    Object.assign({}, cjs, { file: 'dist/bloomer.cjs.min.js' }),
  ],
  plugins: serverConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser()
  ),
})

const browserConfig = Object.assign({}, configBase, {
  output: [
    Object.assign({}, configBase.output, {
      file: 'dist/bloomer.browser.es.js',
      format: 'es',
    }),
    Object.assign({}, configBase.output, cjs, {
      file: 'dist/bloomer.browser.cjs.js',
    }),
  ],
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
    }),
    ignore(['stream'])
  ),
})

const browserProdConfig = Object.assign({}, configBase, browserConfig, {
  output: [
    Object.assign({}, configBase.output, {
      file: 'dist/bloomer.browser.es.min.js',
      format: 'es',
    }),
    Object.assign({}, configBase.output, cjs, {
      file: 'dist/bloomer.browser.cjs.min.js',
    }),
  ],
  plugins: browserConfig.plugins.concat(
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    terser()
  ),
})

export default [
  umdConfig,
  umdProdConfig,
  serverConfig,
  serverProdConfig,
  browserConfig,
  browserProdConfig,
]
