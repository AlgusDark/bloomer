import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

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
  external: ['react', 'styled-components'],
  plugins: commonPlugins,
  output: {
    globals: { react: 'React', 'styled-components': 'styled' },
    sourcemap: true,
  },
}

const umdBaseConfig = Object.assign({}, configBase, {
  output: Object.assign({}, configBase.output, {
    file: 'dist/bloomer.umd.js',
    format: 'umd',
    name: 'Bloomer',
    exports: 'named',
  }),
  plugins: configBase.plugins.concat(
    replace({
      __SERVER__: JSON.stringify(false),
    })
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

const cjsAndModulesConfig = Object.assign({}, configBase, {
  output: [
    Object.assign({}, configBase.output, {
      file: 'dist/bloomer.es.js',
      format: 'es',
    }),
    Object.assign({}, configBase.output, cjs, {
      file: 'dist/bloomer.js',
    }),
  ],
})

const cjsAndModulesProdConfig = Object.assign(
  {},
  configBase,
  cjsAndModulesConfig,
  {
    output: [
      Object.assign({}, configBase.output, {
        file: 'dist/bloomer.es.min.js',
        format: 'es',
      }),
      Object.assign({}, configBase.output, cjs, {
        file: 'dist/bloomer.min.js',
      }),
    ],
    plugins: cjsAndModulesConfig.plugins.concat(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser()
    ),
  }
)

export default [
  umdConfig,
  umdProdConfig,
  cjsAndModulesConfig,
  cjsAndModulesProdConfig,
]
