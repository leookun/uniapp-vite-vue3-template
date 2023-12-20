import Uni from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import UniPages, { presetPageMeta } from 'vite-plugin-uni-pages'
export default defineConfig(() => {
  return {
    plugins: [
      UniPages(
        presetPageMeta({
          showLog: false,
          mergePages: true,
          configSource: (resolve) => resolve('pages.config.ts'),
          dts: 'types/page.d.ts'
        })
      ),
      Components({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
        globs: ['src/components/*/index.ts', 'src/components/*/index.vue'],
        dts: 'types/auto-components.d.ts'
      }),
      AutoImport({
        include: [/\.[tj]s?$/, /\.vue$/, /\.vue\?vue/],
        imports: ['uni-app', 'vue'],
        dirs: [resolve(process.cwd(), './src/hooks/**')],
        dts: 'types/auto-imports.d.ts',
        eslintrc: {
          enabled: false // Default `false`
        }
      }),
      Uni(),

      UnoCSS()
    ]
  }
})
