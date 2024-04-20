import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "leon's home",
  description: "A VitePress Site",
  srcDir: './article',
  base: 'repo',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: '性能优化', link: '/性能优化' },
          { text: '前端鉴权', link: '/前端鉴权' }
        ]
      },
      {
        text: '前端工程化',
        items: [
          { text: '前端部署', link: '/前端部署' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
