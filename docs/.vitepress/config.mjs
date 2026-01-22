// docs/.vitepress/config.mjs
export default {
  title: "VRChat備忘録",
  base: '/vrc-note1/',

  // Gitのコミット履歴から最終更新日を取得する設定（全ページ共通）
  lastUpdated: true,
  
  // headセクションでフォント（400, 500, 700）を読み込む
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap' }]
  ],

  themeConfig: {
    // 最終更新日の表示テキストと形式をカスタマイズ
    lastUpdated: {
      text: '最終更新日',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    // ナビゲーションバーの設定
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'ツール', link: '/my-tools' }
    ],

    // サイドバーの設定
    sidebar: [
      {
        text: 'アバター関連',
        items: [
          { text: 'アバターをアップロードする方法', link: '/avatar-upload' },
          { text: 'Quest対応', link: '/editing' }
        ]
      },
      {
        text: 'ツール・編集',
        items: [
          { text: '便利な改変ツールの総まとめ', link: '/my-tools' }
        ]
      }
    ],

    // 検索やSNSリンクなどを追加する場合はここに記述
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}