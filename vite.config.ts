import Uni from "@dcloudio/vite-plugin-uni";
import { dirname, resolve } from "path";
import { loadConfig } from "unconfig";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import UniPages from "vite-plugin-uni-pages";
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig(() => {
  return {
    plugins: [
      UniPages({
        mergePages: true,
        configSource: resolve(__dirname, "src/pages.config.ts"),
        async onAfterMergePageMetaData(ctx) {
          ctx.pageMetaData = await Promise.all(
            ctx.pageMetaData.map(async (item) => {
              const { path } = item;
              const pagePath = resolve(__dirname, "src/", path);
              const metaPath = resolve(pagePath, "../");
              const meta = await loadConfig({
                cwd: metaPath,
                sources: {
                  files: ["meta.ts"],
                },
                defaults: {},
              });
              return {
                ...item,
                ...meta.config,
              };
            })
          );
        },
      }),
      Uni(),
    ],
  };
});
