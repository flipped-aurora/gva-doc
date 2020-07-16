module.exports = {
    title: 'GIN-VUE-ADMIN',
    description: '基于gin和vue开发的全栈后台管理系统脚手架',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '知识库', link: 'https://www.yuque.com/flipped-aurora/' },
            { text: '视频站', link: 'https://space.bilibili.com/322210472' },
            { text: '在线体验', link: 'http://qmplus.henrongyi.top/' },
            { text: 'github', link: 'https://github.com/piexlmax/gin-vue-admin' },
        ],
        sidebar: [{
                title: '介绍',
                collapsable: false,
                children: [
                    ['/introduce/', '介绍']
                ]
            },
            {
                title: '基础',
                collapsable: false,
                children: [
                    ['/base/', '快速了解'],
                    ['/base/env', '环境部署'],
                    ['/base/pubic', '开发介绍']
                ]
            },
            {
                title: '使用说明',
                collapsable: false,
                children: [
                    ['/help/', '使用说明'],
                ]
            },
            {
                title: '更多',
                collapsable: false,
                children: [
                    ['/more/', '付费内容'],
                    ['/more/coffee', '请作者喝可乐']
                ]
            }
        ],
    },
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
}