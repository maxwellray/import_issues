import { build } from './esbuild.config'

build({
  entryPoints: ['esbuild.config.ts'],
  outdir: 'dist/',
}).then((r) => console.log('done'))
