import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = 'src/commands';

const configs = fs.readdirSync(INPUT_DIR).map((file) => ({
  input: path.join(INPUT_DIR, file),

  plugins: [typescript({ removeComments: true })],

  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name].ahcommand',
  },
}));

export default configs;
