import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction,
      },
      {
        file: packageJson.module,
        format: 'es',
        sourcemap: !isProduction,
      },
    ],
    watch: {
      clearScreen: false,
      include: 'src/**',
      exclude: [
        'node_modules/**',
        'dist/**',
        'src/**/*.stories.tsx',
        'src/**/*.test.tsx',
      ],
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          sourceMap: !isProduction,
          inlineSources: !isProduction,
          ...(!isProduction && { target: 'esnext' }),
        },
      }),
      isProduction &&
        terser({
          format: {
            comments: /^\s*([@#]__[A-Z]+__\s*$|@cc_on)/,
          },
        }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: isProduction,
        inject: {
          insertAt: 'top',
        },
      }),
    ],
    external: [...Object.keys(packageJson.dependencies || {})],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
