import { build } from 'esbuild'

build({
  entryPoints: ['./src/**/*.ts'],
  platform: 'node',
  packages: 'external',
  outdir: 'dist/',
  format: 'cjs',
}).then((r) => console.log('done'))
