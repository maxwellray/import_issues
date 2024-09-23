import { build as b, BuildOptions } from 'esbuild'
import { commonjs } from '@hyrious/esbuild-plugin-commonjs'
import _ from 'lodash'

export const build = (config?: Partial<BuildOptions>) =>
  b(
    _.defaultsDeep(config, {
      bundle: true,
      platform: 'node',
      packages: 'external',
      // plugins: [commonjs({requireReturnsDefault: false})],
      format: 'esm',
    })
  )
