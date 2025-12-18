<template>
  <section 
    id="products"
    class="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-8 sm:mb-12 md:mb-16"
        >
          {{ $t('products.title') }}
        </h2>
        
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mx-auto">
          <div
            v-for="(product, index) in products"
            :key="index"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible="{ opacity: 1, scale: 1 }"
            :delay="index * 100"
            class="bg-accent p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
          >
            <div class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <img 
                :src="`/icons/${product.icon}`" 
                :alt="$t(`products.${product.key}`)"
                class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </div>
            <h3 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-primary">
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
