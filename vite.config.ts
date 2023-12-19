import Uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import UniPages, { presetPageMeta } from "vite-plugin-uni-pages";
export default defineConfig(() => {
  return {
    plugins: [
      UniPages(
        Object.assign(presetPageMeta(), {
          dts: "types/page.d.ts",
        })
      ),
      Uni(),
      UnoCSS(),
      AutoImport({
        imports: ["uni-app", "vue"],
        dts: "types/auto-imports.d.ts",
        eslintrc: {
          enabled: false, // Default `false`
        },
      }),
    ],
  };
});
