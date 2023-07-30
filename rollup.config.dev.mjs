import run from '@rollup/plugin-run'
import deepmerge from 'deepmerge'
import { defineConfig } from 'rollup'
import { exec } from 'node:child_process'

import { config as baseConfig } from './rollup.config.mjs'

/**
 * @param {string} port
 * @returns {Promise<import("rollup").PluginHooks>}
 */
const killer = (port) => ({
  generateBundle() {
    return new Promise((resolve, reject) => {
      const output = exec(`kill -9 $(lsof -t -i:${port})`, (err) => reject(err))
      resolve(output)
    })
  },
})

export const config = defineConfig(
  deepmerge(
    baseConfig,
    {
      output: [
        {
          format: 'cjs',
          dir: 'dist',
          sourcemap: 'inline',
        },
      ],
      plugins: [killer(process.env.PORT ?? 8080), run()],
    },
    {
      customMerge: (key) => {
        if (key === 'output') return (left, right) => right

        return deepmerge
      },
    }
  )
)

export default [config]
