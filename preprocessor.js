const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

tsConfig.compilerOptions.module = 'commonjs';
tsConfig.compilerOptions.inlineSourceMap = true;
tsConfig.compilerOptions.inlineSources = true;

delete tsConfig.compilerOptions.sourceMap;
delete tsConfig.compilerOptions.outDir;

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, []);
    }
    return src;
  },
};