import Uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import UniPages, { presetPageMeta } from 'vite-plugin-uni-pages'
export default defineConfig(() => {
  return {
    plugins: [
      UniPages(
        presetPageMeta({
          showLog: true,
          mergePages: true,
          configSource: (resolve) => resolve('pages.config.ts'),
          dts: 'types/page.d.ts'
        })
      ),
      Uni(),
      UnoCSS(),
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
      })
    ]
  }
})
