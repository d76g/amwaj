export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop()?.split(';').shift()
      return null
    }
    
    const updateDirection = () => {
      const locale = getCookie('i18n_redirected') || 'en'
      const dir = locale === 'ar' ? 'rtl' : 'ltr'
      const lang = locale === 'ar' ? 'ar' : 'en'
      document.documentElement.setAttribute('dir', dir)
      document.documentElement.setAttribute('lang', lang)
    }
    
    // Set initial direction
    updateDirection()
    
    // Watch for cookie changes
    setInterval(() => {
      updateDirection()
    }, 100)
  }
})

