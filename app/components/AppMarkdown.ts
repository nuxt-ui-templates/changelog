import shiki from '@comark/nuxt/plugins/shiki'
import emoji from '@comark/nuxt/plugins/emoji'

// Reusable Comark renderer with the plugins the changelog relies on baked in:
// syntax highlighting (Comark's default theme), emoji shortcodes, and GitHub
// `@mention` links (see app/utils/github-references.ts).
export default defineMarkdownComponent({
  name: 'AppMarkdown',
  plugins: [
    shiki(),
    emoji(),
    githubReferences()
  ]
})
