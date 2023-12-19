import Uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import UniPages, { presetPageMeta } from "vite-plugin-uni-pages";
export default defineConfig(() => {
  return {
    plugins: [
      UniPages(
        presetPageMeta({
          showLog: true,
          mergePages: true,
          configSource: (resolve) => resolve("pages.config.ts"),
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
