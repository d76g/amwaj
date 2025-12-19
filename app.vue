<script setup lang="ts">
const { t } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

useHead({
  title: 'AMWAJ COMMODITIES',
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${t('home.title')}` : 'AMWAJ COMMODITIES'
  },
  meta: [
    { name: 'description', content: () => t('about.description') },
    // Open Graph
    { property: 'og:title', content: () => 'AMWAJ COMMODITIES - ' + t('home.title') },
    { property: 'og:description', content: () => t('about.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: `${siteUrl}/images/logo.jpeg` },
    { property: 'og:url', content: siteUrl },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: () => 'AMWAJ COMMODITIES' },
    { name: 'twitter:description', content: () => t('about.description') },
    { name: 'twitter:image', content: `${siteUrl}/images/logo.jpeg` }
  ],
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/images/logo.jpeg' }
  ]
})
</script>

<template>
  <div id="smooth-wrapper">
    <SplashScreen />
    <div id="smooth-content">
      <NuxtPage />
    </div>
  </div>
</template>

