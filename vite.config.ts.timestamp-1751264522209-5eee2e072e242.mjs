// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/vite@5.2.12_sass@1.77.4_terser@5.31.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vi_8d1f1ad8b8a8af70b2c758326926f798/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import unoCSS from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.3_439f50b10ccb95d33972ec4d7f99a69d/node_modules/unocss/dist/vite.mjs";
import eslintPlugin from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/vite-plugin-eslint@1.8.1_es_eb29e750d8240d220f2b07c2aa2483c4/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelintPlugin from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/vite-plugin-stylelint@5.3.1_7d7616a924c9c1b40376fe3c6f20864c/node_modules/vite-plugin-stylelint/dist/index.mjs";
import markedPreview from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/node_modules/.pnpm/vite-plugin-doc-preview@0.2.1/node_modules/vite-plugin-doc-preview/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-components/vite.config.ts";
var DEV_CONFIG = {
  config: {
    base: "./",
    server: {
      host: "0.0.0.0",
      port: 6688,
      open: true,
      proxy: {
        "/api": {
          target: "https://manager-sit-tc.mobje.cn",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp("^/api"), "")
        }
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        "doc/**/*.{js,ts,vue}",
        "doc/*.{js,ts,vue}",
        "*.{js,ts}",
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    })
  ]
};
var DOCS_CONFIG = {
  config: {
    base: "./",
    build: {
      outDir: `dist-doc`
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        "doc/**/*.{js,ts,vue}",
        "doc/*.{js,ts,vue}",
        "*.{js,ts}",
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    })
    // visualizer({
    //   open: true
    // })
  ]
};
var PACKAGES_CONFIG = {
  config: {
    base: "./",
    build: {
      lib: {
        entry: "./package/main.ts",
        name: "mo-web-components"
      },
      sourcemap: true,
      outDir: "dist",
      // 确保外部化处理那些你不想打包进库的依赖
      rollupOptions: {
        external: ["vue"]
      }
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/]
    }),
    eslintPlugin({
      cache: false,
      include: [
        "doc/**/*.{js,ts,vue}",
        "doc/*.{js,ts,vue}",
        "*.{js,ts}",
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    })
    // visualizer({
    //   open: true
    // })
  ]
};
var vite_config_default = defineConfig(({ mode }) => {
  const viteConfig = mode === "dev" ? DEV_CONFIG : mode === "doc" ? DOCS_CONFIG : PACKAGES_CONFIG;
  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./package", __vite_injected_original_import_meta_url)),
        "@doc": fileURLToPath(new URL("./doc", __vite_injected_original_import_meta_url))
      }
    },
    plugins: [
      ...viteConfig.plugins,
      unoCSS(),
      stylelintPlugin({
        include: [
          "doc/**/*.{css,scss,less}",
          "doc/*.{css,scss,less}",
          "package/**/*.{css,scss,less}",
          "package/*.{css,scss,less}"
        ],
        fix: true
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXFx1OTFDRFx1Njc4NFx1NzY4NFx1OTg3OVx1NzZFRVxcXFxtb2JqZS13ZWItY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxcdTkxQ0RcdTY3ODRcdTc2ODRcdTk4NzlcdTc2RUVcXFxcbW9iamUtd2ViLWNvbXBvbmVudHNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvJUU5JTg3JThEJUU2JTlFJTg0JUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL21vYmplLXdlYi1jb21wb25lbnRzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB1bm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHN0eWxlbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZWxpbnQnO1xuaW1wb3J0IG1hcmtlZFByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tZG9jLXByZXZpZXcnXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcblxuY29uc3QgREVWX0NPTkZJRyA9IHtcbiAgY29uZmlnOiB7XG4gICAgYmFzZTogJy4vJyxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIGhvc3Q6ICcwLjAuMC4wJyxcbiAgICAgIHBvcnQ6IDY2ODgsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgcHJveHk6IHtcbiAgICAgICAgJy9hcGknOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9tYW5hZ2VyLXNpdC10Yy5tb2JqZS5jbicsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UobmV3IFJlZ0V4cCgnXi9hcGknKSwgJycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKHtcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICB9KSxcbiAgICBtYXJrZWRQcmV2aWV3KCksXG4gICAgZXNsaW50UGx1Z2luKHtcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ2RvYy8qKi8qLntqcyx0cyx2dWV9JyxcbiAgICAgICAgJ2RvYy8qLntqcyx0cyx2dWV9JyxcbiAgICAgICAgJyoue2pzLHRzfScsXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAncGFja2FnZS8qLntqcyx0cyx2dWV9JyxcbiAgICAgIF0sXG4gICAgICBmaXg6IHRydWVcbiAgICB9KSxcbiAgXVxufVxuXG5jb25zdCBET0NTX0NPTkZJRyA9IHtcbiAgY29uZmlnOiB7XG4gICAgYmFzZTogJy4vJyxcbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiBgZGlzdC1kb2NgLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuICAgIG1hcmtlZFByZXZpZXcoKSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnZG9jLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnKi57anMsdHN9JyxcbiAgICAgICAgJ3BhY2thZ2UvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pLFxuICAgIC8vIHZpc3VhbGl6ZXIoe1xuICAgIC8vICAgb3BlbjogdHJ1ZVxuICAgIC8vIH0pXG4gIF1cbn1cblxuY29uc3QgUEFDS0FHRVNfQ09ORklHID0ge1xuICBjb25maWc6IHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6ICcuL3BhY2thZ2UvbWFpbi50cycsXG4gICAgICAgIG5hbWU6ICdtby13ZWItY29tcG9uZW50cycsXG4gICAgICB9LFxuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgICAvLyBcdTc4NkVcdTRGRERcdTU5MTZcdTkwRThcdTUzMTZcdTU5MDRcdTc0MDZcdTkwQTNcdTRFOUJcdTRGNjBcdTRFMERcdTYwRjNcdTYyNTNcdTUzMDVcdThGREJcdTVFOTNcdTc2ODRcdTRGOURcdThENTZcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvXSxcbiAgICB9KSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnZG9jLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnKi57anMsdHN9JyxcbiAgICAgICAgJ3BhY2thZ2UvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pLFxuICAgIC8vIHZpc3VhbGl6ZXIoe1xuICAgIC8vICAgb3BlbjogdHJ1ZVxuICAgIC8vIH0pXG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7bW9kZX0pID0+IHtcbiAgY29uc3Qgdml0ZUNvbmZpZyA9IG1vZGUgPT09ICdkZXYnID8gREVWX0NPTkZJRyA6IChcbiAgICBtb2RlID09PSAnZG9jJyA/IERPQ1NfQ09ORklHIDogUEFDS0FHRVNfQ09ORklHXG4gIClcblxuICByZXR1cm4ge1xuICAgIC4uLnZpdGVDb25maWcuY29uZmlnLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3BhY2thZ2UnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICAgJ0Bkb2MnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vZG9jJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICB9XG4gICAgfSxcblxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC4uLnZpdGVDb25maWcucGx1Z2lucyxcblxuICAgICAgdW5vQ1NTKCksXG5cbiAgICAgIHN0eWxlbGludFBsdWdpbih7XG4gICAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgICAnZG9jLyoqLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgICAnZG9jLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgICAncGFja2FnZS8qKi8qLntjc3Msc2NzcyxsZXNzfScsXG4gICAgICAgICAgJ3BhY2thZ2UvKi57Y3NzLHNjc3MsbGVzc30nLFxuICAgICAgICBdLFxuICAgICAgICBmaXg6IHRydWVcbiAgICAgIH0pXG4gICAgXVxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlW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
