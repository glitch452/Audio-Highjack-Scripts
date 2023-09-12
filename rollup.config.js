import typescript from '@rollup/plugin-typescript';
import glob from 'glob';

export default {
  input: glob.sync('src/commands/*.ts'),

  plugins: [typescript({ removeComments: true })],

  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].ahcommand',
  },
};
