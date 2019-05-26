module.exports = {
  title: 'JaffaMod v3',
  description: 'JaffaMod v3 API',
  markdown: {
    lineNumbers: true
  },
  base: '/jaffamod/v3',
  themeConfig: {
    lastUpdated: 'Last updated',
    logo: 'https://jaffamod.apps.yogscast.com/logo.png',
    heroText: 'v3',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'Reference', link: '/reference/'},
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: [
      ['/', 'Home'],
      ['/guide/', 'Guide'],
      {
        title: 'Reference',
        path: '/reference/',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          ['/reference/jaffamod', 'class JaffaMod']
        ]
      },
    ],

    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsRepo: 'Akhawais/Jaffa3Docs'
  }
}