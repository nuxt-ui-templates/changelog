export default defineAppConfig({
  repository: 'nuxt/ui',
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    prose: {
      li: {
        base: 'wrap-break-word'
      },
      a: {
        base: 'wrap-break-word'
      }
    }
  }
})
