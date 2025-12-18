<template>
  <section 
    id="products"
    class="py-24 bg-white"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-4xl md:text-5xl font-bold text-primary text-center mb-16"
        >
          {{ $t('products.title') }}
        </h2>
        
        <div class="grid md:grid-cols-4 gap-8 mx-auto">
          <div
            v-for="(product, index) in products"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="index * 100"
            class="bg-accent p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
          >
            <div class="w-24 h-24 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <img 
                :src="`/icons/${product.icon}`" 
                :alt="$t(`products.${product.key}`)"
                class="w-12 h-12 "
              />
            </div>
            <h3 class="text-xl font-semibold text-primary">
              {{ $t(`products.${product.key}`) }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { key: 'barley', icon: 'grain.png' },
  { key: 'wheat', icon: 'wheat.png' },
  { key: 'corn', icon: 'corn.png' },
  { key: 'soybean', icon: 'soya.png' }
]
</script>
