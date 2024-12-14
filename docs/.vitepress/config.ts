
const Guide = [
  { text: 'Get Started', link: '/guide/setup' },
  { text: '简介', link: '/guide/introduction' },
];

const comps = [
  { text: 'button', link: '/components/button' ,items:[] },
  { text: 'Shared', link: '/components/shared/' }
];

const DefaultSideBar = [
  { text: '快速指南', items: Guide },
  { text: '组件', items: comps },
];

export default {
  base: '/handy-ui/',
  title: 'handy-ui',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: '' }],
    nav: [
      { text: '快速指南', link: '/guide/setup' },
      { text: '组件集合', link: '/components/button' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/components/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
    
  },
};
