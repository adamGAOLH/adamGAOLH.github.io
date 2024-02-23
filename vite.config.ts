import { defineConfig, loadEnv, UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path' //这个path用到了上面安装的@types/node
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 打包和分析包大小
import vitePluginCompression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd())
    console.log(env);

    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            }),
            {
                ...vitePluginCompression,
                apply: 'build'

            },
            visualizer({open:true})

        ],
        resolve: {
            alias: {
                "@": path.resolve("./src"),
                "#": path.resolve("./type")
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/index.scss";'
                }

            }
        },
        server: {
            host: "0.0.0.0",
            port: Number(env.VITE_APP_PORT),
            open: true,
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: env.VITE_APP_API_URL,
                    changeOrigin: true,
                    ws: true,
                    rewrite: (path: string) => path.replace(new RegExp("^" + env.VITE_APP_BASE_API), "")

                }


            }

        },
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        vue: ['vue', 'pinia', 'vue-router'],
                        elementIcons: ['@element-plus/icons-vue']


                    },
                    chunkFileNames:"static/js/[name]-[hash].js",
                    entryFileNames:"static/js/[name]-[hash].js",
                    assetFileNames:"static/[ext]/[name]-[hash].[ext]"

                }


            }

        }
    }

})



