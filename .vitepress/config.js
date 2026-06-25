import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "自然辩证法",
  description: "当代科学视野下的唯物辩证法重塑",
  base: '/dialectics-of-nature/', 
  
  locales: {
    // 💡 这里的 root 负责项目的绝对根路径
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        // 🎯 修正：中文首页的真实路由是 '/'，不要写成 '/zh/'
        nav: [{ text: '首页', link: '/' }],
        sidebar: [
          {
            text: '第一部分：导言与历史',
            items: [
              // 🎯 修正：因为你的文件在 zh/ 文件夹下，这里补全 '/zh/' 路径最稳妥
              { text: '第一章：导言', link: '/zh/chapter-1' }
            ]
          }
        ]
      }
    },
    // 💡 这里的 en 负责英文子路径 /en/
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/', // 保持不变，非常正确
      themeConfig: {
        nav: [{ text: 'Home', link: '/en/' }], // 保持不变，非常正确
        sidebar: [
          {
            text: 'Part 1: Intro',
            items: [
              { text: 'Chapter 1: Intro', link: '/en/chapter-1' } // 保持不变，非常正确
            ]
          }
        ]
      }
    }
  }
})
