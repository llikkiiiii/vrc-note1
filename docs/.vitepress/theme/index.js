import DefaultTheme from 'vitepress/theme'
import './custom.css'
import CopyUrl from './CopyUrl.vue'
import CopyPath from './CopyPath.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // これで Markdown 内で <CopyUrl url="..." /> と書けるようになります
    app.component('CopyUrl', CopyUrl)
    app.component('CopyPath', CopyPath)
  }
}