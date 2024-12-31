import {fileURLToPath, URL} from 'node:url';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import unoCSS from 'unocss/vite';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import markedPreview from 'vite-plugin-doc-preview'
import { visualizer } from 'rollup-plugin-visualizer';

const DEV_CONFIG = {
  config: {
    base: './',
    server: {
      host: '0.0.0.0',
      port: 6688,
      open: true,
      proxy: {
        '/api': {
          target: 'https://manager-sit-tc.mobje.cn',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp('^/api'), '')
        }
      }
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        '*.{js,ts}',
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    }),
  ]
}

const DOCS_CONFIG = {
  config: {
    base: './',
    build: {
      outDir: `dist`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        '*.{js,ts}',
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    }),
    // visualizer({
    //   open: true
    // })
  ]
}

const PACKAGES_CONFIG = {
  config: {
    base: './',
    build: {
      lib: {
        entry: './package/main.ts',
        name: 'mo-web-components',
      },
      sourcemap: true,
      outDir: 'dist-npm',
      // 确保外部化处理那些你不想打包进库的依赖
      rollupOptions: {
        external: ['vue'],
      }
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    eslintPlugin({
      cache: false,
      include: [
        'doc/**/*.{js,ts,vue}',
        'doc/*.{js,ts,vue}',
        '*.{js,ts}',
        'package/**/*.{js,ts,vue}',
        'package/*.{js,ts,vue}',
      ],
      fix: true
    }),
    // visualizer({
    //   open: true
    // })
  ]
}

export default defineConfig(({mode}) => {
  const viteConfig = mode === 'dev' ? DEV_CONFIG : (
    mode === 'doc' ? DOCS_CONFIG : PACKAGES_CONFIG
  )

  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./package', import.meta.url)),
        '@doc': fileURLToPath(new URL('./doc', import.meta.url)),
      }
    },

    plugins: [
      ...viteConfig.plugins,

      unoCSS(),

      stylelintPlugin({
        include: [
          'doc/**/*.{css,scss,less}',
          'doc/*.{css,scss,less}',
          'package/**/*.{css,scss,less}',
          'package/*.{css,scss,less}',
        ],
        fix: true
      })
    ]
  };
});
