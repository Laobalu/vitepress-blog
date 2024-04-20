import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh",
  title: "leon's home",
  description: "A VitePress Site",
  srcDir: './article',
  base: '/vitepress-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文章', link: '/数据类型' }
    ],
    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: '数据类型', link: '/数据类型' },
          { text: '执行上下文', link: '/执行上下文' },
          { text: '原型与继承', link: '/原型与继承' },
          { text: 'this', link: '/this' },
          { text: '事件循环', link: '/事件循环' },
        ]
      },
      {
        text: '工程化',
        items: [
          { text: '前端部署', link: '/前端部署' },
          { text: '性能优化', link: '/性能优化' },
          { text: '前端鉴权', link: '/前端鉴权' }
        ]
      },
      {
        text: '工具',
        items: [
          { text: 'macos安装nvm', link: '/macos安装nvm' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
