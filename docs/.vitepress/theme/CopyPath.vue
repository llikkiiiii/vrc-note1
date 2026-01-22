<script setup>
import { ref } from 'vue'
const props = defineProps(['path'])
const copied = ref(false)

const copy = () => {
  if (!props.path) return
  navigator.clipboard.writeText(props.path)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
</script>

<template>
  <div class="copy-field" @click="copy">
    <span class="text-content">
      <slot>{{ path }}</slot>
    </span>
    <span class="copy-icon-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    </span>
    <transition name="fade">
      <span v-if="copied" class="mini-badge">コピー完了！</span>
    </transition>
  </div>
</template>

<style scoped>
.copy-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 背景色を透明にし、枠線もホバー時以外は見えないように設定 */
  background-color: transparent; 
  border: 1px solid transparent; 
  border-radius: 6px;
  padding: 4px 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  width: 100%;
}

.copy-field:hover {
  /* ホバーした時だけ、薄いグレーの背景と枠線を表示 */
  background-color: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.text-content {
  font-family: var(--vp-font-family-base);
  font-size: 0.95rem;
  color: inherit; /* 親（テーブル等）の文字色を継承 */
  white-space: nowrap;
}

.copy-icon-btn {
  color: var(--vp-c-text-3);
  display: flex;
  opacity: 0.4; /* 通常時はかなり薄く */
  margin-left: 12px;
}

.copy-field:hover .copy-icon-btn {
  opacity: 1;
  color: var(--vp-c-brand-1);
}

.mini-badge {
  position: absolute;
  right: 0;
  top: -20px;
  background-color: var(--vp-c-brand-1);
  color: white;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>