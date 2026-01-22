<script setup>
import { ref } from 'vue'

defineProps(['url'])

const copied = ref(false)

const copy = (url) => {
  if (!url) return
  navigator.clipboard.writeText(url)
  
  copied.value = true
  
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div class="copy-container">
    <span class="copy-url" @click="copy(url)" :title="url">
      {{ url }}
    </span>

    <transition name="fade">
      <span v-if="copied" class="copy-badge">コピー完了！</span>
    </transition>
  </div>
</template>

<style scoped>
.copy-container {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  line-height: 1;
  max-width: 100%;
}

.copy-url {
  display: block; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;

  font-family: var(--vp-font-family-mono);
  font-size: 0.85em;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  padding: 3px 8px;
  border-radius: 4px;
  cursor: copy;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
}

.copy-url:hover {
  background-color: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}

.copy-badge {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.75em;
  font-weight: bold;
  color: #ffffff !important;
  background-color: #2e7d32 !important;
  padding: 2px 10px;
  border-radius: 12px;
  white-space: nowrap;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  pointer-events: none;
  z-index: 10;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -30%);
}
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -70%);
}
</style>