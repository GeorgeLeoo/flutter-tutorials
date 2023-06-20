/*
 * @Author: 季晓东
 * @Date: 2023-06-20 14:49:13
 * @LastEditors: 季晓东
 * @LastEditTime: 2023-06-20 14:53:58
 * @Description: 
 * @FilePath: /flutter-tutorials/src/main.js
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
