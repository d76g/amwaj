<template>
  <section 
    id="about"
    class="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white overflow-hidden"
  >
    <div class="container mx-auto max-w-[1200px]">
      
      <!-- Top Content Block -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
        
        <!-- Left Column -->
        <div ref="leftCol">
          <!-- Eyebrow -->
          <div class="inline-block border border-[#999] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 md:mb-6">
            <span class="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
              {{ $t('about.eyebrow') }}
            </span>
          </div>
          
          <!-- Heading -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-black leading-tight sm:leading-none mt-4 md:mt-6">
            {{ $t('about.title') }}
          </h2>
        </div>

        <!-- Right Column -->
        <div ref="rightCol" class="mt-6 md:mt-0">
          <!-- Body Text -->
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#333] leading-relaxed mb-6 md:mb-8">
            {{ $t('about.description') }}
          </p>
          
          <!-- CTA Button -->
          <NuxtLink 
            to="#contact"
            class="inline-flex items-center gap-2 sm:gap-3 bg-accent text-primary-dark pl-3 sm:pl-4 pr-1 py-2 sm:py-2.5 rounded-full font-semibold transition-transform hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            <span>{{ $t('about.cta') }}</span>
            <div>
              <img src="/icons/right-up.png" alt="arrow" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom Grid Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-12 sm:mt-16 md:mt-20" ref="cardsGrid">
        
        <!-- Card 1: Image -->
        <div class="aspect-square rounded-2xl md:rounded-3xl overflow-hidden relative group">
          <img 
            src="/images/farmer-in-field.png" 
            alt="Farmer in field" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <!-- Card 2: Text Card Light -->
        <div class="bg-[#F5F5F5] rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between aspect-square min-h-[200px] sm:min-h-0">
          <div>
            <span class="text-3xl sm:text-4xl md:text-5xl font-bold text-black block mb-2">{{ $t('about.stat1') }}</span>
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2">{{ $t('about.stat1_title') }}</h3>
          </div>
          <p class="text-xs sm:text-sm text-gray-500">{{ $t('about.stat1_desc') }}</p>
        </div>

        <!-- Card 3: Image -->
        <div class="aspect-square rounded-2xl md:rounded-3xl overflow-hidden relative group">
          <img 
            src="/images/tractor-corn.png" 
            alt="Tractor in corn field" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <!-- Card 4: Text Card Accent -->
        <div class="bg-accent rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between aspect-square min-h-[200px] sm:min-h-0">
          <div>
            <span class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-dark block mb-2">{{ $t('about.stat2') }}</span>
            <h3 class="text-base sm:text-lg md:text-xl font-bold text-primary-dark mb-2">{{ $t('about.stat2_title') }}</h3>
          </div>
          <p class="text-xs sm:text-sm text-primary-dark/80 font-medium">{{ $t('about.stat2_desc') }}</p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const leftCol = ref(null)
const rightCol = ref(null)
const cardsGrid = ref(null)

onMounted(() => {
  // Top Content Animation
  gsap.from([leftCol.value, rightCol.value], {
    scrollTrigger: {
      trigger: '#about',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    y: 100,
    autoAlpha: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out'
  })

  // Cards Animation
  const cards = cardsGrid.value.children
  gsap.from(cards, {
    scrollTrigger: {
      trigger: cardsGrid.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    y: 150,
    scale: 0.9,
    autoAlpha: 0,
    duration: 1,
    stagger: {
      amount: 0.6,
      from: "start"
    },
    ease: 'elastic.out(1, 0.75)'
  })
})
</script>
