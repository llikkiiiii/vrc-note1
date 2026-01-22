---
layout: page
editLink: false
lastUpdated: false
---

<div class="maintenance-container">
  <div class="maintenance-icon">🚧</div>
  <br>
  <h1 class="maintenance-title">Coming Soon...</h1>
  <p class="maintenance-text">
    現在、このページは<b>編集中につき非公開</b>です。<br>
    公開まで今しばらくお待ちください。
  </p>
  <a href="/" class="back-home">トップページへ戻る</a>
</div>

<style scoped>
.maintenance-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  margin-top: 40px;
  border: 1px solid var(--vp-c-divider);
}

.maintenance-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.maintenance-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  margin-bottom: 16px;
  border: none !important; /* H1の標準下線を消す */
}

.maintenance-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin-bottom: 30px;
}

.back-home {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: #ffffff !important;
  padding: 10px 24px;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none !important;
  transition: opacity 0.2s;
}

.back-home:hover {
  opacity: 0.8;
}

/* サイドバーなどを隠して「非公開」感を出す場合（お好みで） */
:deep(.VPAside), :deep(.VPDocFooter) {
  display: none !important;
}
</style>