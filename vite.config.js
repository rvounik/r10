import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "./src/style/global.scss" as *;`, // global scss (color vars etc)
            },
        },
    },
    plugins: [
        vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets',
                    dest: ''
                }
            ]
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
})
