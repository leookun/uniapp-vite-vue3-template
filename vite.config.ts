import Uni from "@dcloudio/vite-plugin-uni";
import { defineConfig } from "vite";
import UniPages, { presetPageMeta } from "vite-plugin-uni-pages";
export default defineConfig(() => {
  return {
    plugins: [
      UniPages(
        Object.assign(presetPageMeta(), {
          dts: "src/page.d.ts",
        })
      ),
      Uni(),
    ],
  };
});
