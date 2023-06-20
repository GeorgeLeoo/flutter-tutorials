/*
 * @Author: 季晓东
 * @Date: 2023-06-20 14:49:13
 * @LastEditors: 季晓东
 * @LastEditTime: 2023-06-20 15:31:42
 * @Description: 
 * @FilePath: /flutter-tutorials/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    host: "0.0.0.0"
  },
})
