module.exports = {
  base: '/yg-axios-doc/',
  dest: 'dist',
  title: '使用 TypeScript 从零实现 axios',
  description: '学习使用 TypeScript 从零实现 axios 库',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: '初识 TypeScript',
        collapsable: false,
        children: [
          ['foo/', 'Introduction']
        ]
      }
    ]
  }
}