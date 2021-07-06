import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');

const plugins = (browserslist, declaration) => [
  resolve(),
  json(),
  ts({
    tsconfig: (resolvedConfig) => ({
      ...resolvedConfig,
      declaration,
      declarationMap: declaration
    }),
    browserslist
  })
];

const outputs = [
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm'
    },
    plugins: plugins(undefined, true)
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'umd',
        name: 'goslingTheme',
        exports: 'named'
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'goslingTheme',
        exports: 'named',
        plugins: [terser()]
      }
    ],
    plugins: plugins('defaults and not IE 11', false),
  }
];

export default outputs;
