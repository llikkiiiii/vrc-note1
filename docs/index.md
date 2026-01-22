---
layout: home

hero:
  name: "VRChat備忘録"
  # taglineの先頭に署名を組み込み、CSSで改行を有効にします
  tagline: "by りっきー\n\n技術的なメモの共有や、思い出の記録。"
  image:
    src: /images/VRChat_2025-11-07_21-59-02.777_3840x2160_4-3.png
    alt: VRChat Photo
  actions:
    - theme: brand
      text: アバターをアップロードする方法を見る
      link: /avatar-upload
    - theme: alt
      text: ツール詳細を見る
      link: /tool-details

features:
  - icon: 📖
    title: 備忘録
    details: アップロード手順やツールの使い方など、実用的な情報を整理。
  - icon: 📸
    title: 記録
    details: 改変のこだわりや、VRChatでの日々の思い出を記録。
  - icon: 🛠️
    title: ツール
    details: VPMリポジトリURLのコピーなど、便利な機能を総括。
---

## ドキュメント

りっきーのVRChat備忘録へようこそ。
以下のリンクを活用してください。

### [★ VRCにアバターをアップロードする方法 ★](/avatar-upload)
最小限のセットアップ手順とアップロード方法について解説。

### [👤 りっきーのプロフィール(編集中)](/editing)
VRChatでの活動やプロフィールについて紹介。

### [📦 便利な改変ツールの総まとめ](/my-tools)
アバター改変時に役立つツールや設定項目について。

### [🦄 りっきーのアバター改変(編集中)](/editing)
こだわりや改変記録のまとめ。


<style scoped>
/* --- 1. タイトルの色（緑のグラデーション） --- */
:deep(.VPHero .name) {
  background: linear-gradient(
    120deg, 
    #1b5e20 0%,    
    #2e7d32 33%,   
    #43a047 67%,   
    #66bb6a 100%   /* 柔らかい純粋な緑 */
  ) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

/* --- 2. 署名とキャッチコピーの調整 --- */
:deep(.VPHero .tagline) {
  white-space: pre-wrap; /* \n による改行を有効化 */
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 1行目の "by りっきー" だけを装飾 */
:deep(.VPHero .tagline)::first-line {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

/* --- 3. ボタンの調整 --- */
:deep(.VPButton.brand) {
  background-color: #2e7d32 !important;
  border-color: #2e7d32 !important;
  color: #ffffff !important;
  font-size: 1.15rem !important;
  padding: 0 32px !important;
  height: 54px !important;
  line-height: 52px !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25);
}

:deep(.VPButton.brand:hover) {
  background-color: #43a047 !important;
  border-color: #43a047 !important;
}

:deep(.VPButton.alt) {
  font-size: 0.95rem !important;
  height: 54px !important;
  line-height: 52px !important;
}

/* --- 4. 画像とレイアウトの調整 --- */
:deep(.VPHero .image-container) {
  display: flex;
  justify-content: center;
  max-width: 100% !important;
  width: 100%;
}

:deep(.VPHero .image-src) {
  max-width: 850px !important;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

@media (min-width: 960px) {
  :deep(.VPHero .container) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

/* --- 5. リンクの色 --- */
h3 a {
  color: #2e7d32 !important;
  text-decoration: none;
}

h3 a:hover {
  text-decoration: underline;
}
</style>