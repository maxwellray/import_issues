import { build } from 'esbuild'

build({
  entryPoints: ['./src/**/*.ts'],
  platform: 'node',
  packages: 'external',
  outdir: 'dist/',
  format: 'cjs',
  sourcemap: 'linked',
}).then((r) => console.log('done'))
