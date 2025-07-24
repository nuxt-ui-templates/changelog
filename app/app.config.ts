export default defineAppConfig({
  repository: 'nuxt/ui',
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'slate'
    }
  },
  uiPro: {
    prose: {
      li: {
        base: 'break-words'
      },
      a: {
        base: 'break-words'
      }
    }
  }
})
