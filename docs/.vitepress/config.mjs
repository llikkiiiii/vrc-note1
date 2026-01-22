// docs/.vitepress/config.mjs
export default {
  title: "VRChat備忘録",
  // GitHub PagesのURL（llikkiiiii.github.io/vrc-note1/）に合わせるための設定
  base: '/vrc-note1/',

  lastUpdated: true,
  
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }]
  ],

  themeConfig: {
    lastUpdated: {
      text: '最終更新日',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ツール', link: '/my-tools' }
    ],

    sidebar: [
      {
        text: 'アバター関連',
        items: [
          { text: 'アバターをアップロードする方法', link: '/avatar-upload' },
          // editing.md がまだ無い場合はビルドエラーになるため、一旦既存のファイルか '#' にしておくのが安全です
          { text: 'プロフィール(編集中)', link: '/editing' } 
        ]
      },
      {
        text: 'ツール・編集',
        items: [
          { text: '便利な改変ツールの総まとめ', link: '/my-tools' },
          { text: '各ツールの詳細', link: '/tool-details' }
        ]
      }
    ],

    socialLinks: [
      // リンク先を自分のリポジトリに変更しておくと便利
      { icon: 'github', link: 'https://github.com/llikkiiiii/vrc-note1' }
    ]
  }
}