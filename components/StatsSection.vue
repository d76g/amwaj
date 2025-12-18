<template>
  <section 
    id="stats"
    class="py-24 bg-gradient-to-br from-primary to-primary-dark"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {{ $t('stats.title') }}
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="index * 100"
            class="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
          >
            <h3 class="text-2xl font-bold text-accent mb-2">0</h3>
            <p class="text-white">{{ $t(`stats.${stat.key}`) }}</p>
          </div>
        </div>
        
        <div class="text-center">
          <NuxtLink
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="500"
            to="#contact"
            class="inline-block px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {{ $t('stats.cta') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { key: 'coreCommodities' },
  { key: 'globalPartners' },
  { key: 'supplyChain' },
  { key: 'trust' }
]
</script>

