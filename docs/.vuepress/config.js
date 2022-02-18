// see https://vuepress.vuejs.org/zh/config/ 
// to understand the config item and design your config files.
const repo = 'vuepress-simple-template';

module.exports = {
  base: repo,
  title: repo,
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Github', link: 'https://github.com/hua-bang/vuepress-simple-template', target:'_blank', rel:''},
    ],
    sidebar: [
      {
        title: '首页',   
        path: '/',     
        collapsable: false, 
        sidebarDepth: 1
      },
      {
        title: '大标题',   
        collapsable: false, 
        sidebarDepth: 1,  
        children: [
          ['/demo/title1', "标题1"],
          ['/demo/title2', "标题2"],
        ]
      },
      {
        title: '测试标题',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/demo2/test', '测试标题1']
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '../image'
      }
    }
  }
}