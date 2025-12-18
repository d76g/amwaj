export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  i18n: {
    locales: [
      { code: 'en', name: 'English', dir: 'ltr', file: 'en.json' },
      { code: 'ar', name: 'العربية', dir: 'rtl', file: 'ar.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    langDir: 'locales/'
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      'IBM+Plex+Sans+Arabic': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    preload: true
  }
})