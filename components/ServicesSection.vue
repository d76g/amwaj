<template>
  <section 
    id="services"
    class="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary text-white relative overflow-hidden"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Header Block: Asymmetric Split -->
      <div class="flex flex-col md:flex-row justify-between items-start mb-12 sm:mb-16 md:mb-20 gap-8 sm:gap-10">
        
        <!-- Left Column -->
        <div class="w-full md:w-1/2" ref="headerLeft">
          <div class="inline-block border border-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <span class="text-xs sm:text-sm font-medium uppercase tracking-wide">
              {{ $t('services.eyebrow') }}
            </span>
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-[1.1]">
            {{ $t('services.title') }}
          </h2>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/3 pt-8 md:pt-20" ref="headerRight">
          <p class="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
            {{ $t('services.description') }}
          </p>
        </div>
      </div>

      <!-- Interaction Grid: Split Visual & Matrix -->
      <div class="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        <!-- Left Visual: Large Format Image -->
        <div ref="visualLeft" class="lg:col-span-5 relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[400px] md:min-h-[500px] h-full shadow-2xl">
          <img 
            src="/images/landscape-tractor.png" 
            alt="Agri-commodity operations" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        <!-- Right Matrix: 2x2 Grid -->
        <div ref="matrixGrid" class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 content-start">
          
          <!-- Card 1: Standard Card -->
          <div class="bg-primary-dark hover:bg-accent p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-start h-full min-h-[240px] sm:min-h-[280px] group transition-all duration-300">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
              <img src="/icons/trading.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            </div>
            <div class="flex flex-col justify-start">
              <h3 class="text-xl sm:text-2xl text-white group-hover:text-black mb-2 sm:mb-3 transition-colors duration-300">{{ $t('services.trading.title') }}</h3>
              <p class="text-white/80 group-hover:text-black/80 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-4 sm:line-clamp-5">{{ $t('services.trading.description') }}</p>
            </div>
          </div>

          <!-- Card 2: Standard Card -->
          <div class="bg-primary-dark hover:bg-accent p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-start h-full min-h-[240px] sm:min-h-[280px] group transition-all duration-300">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
              <img src="/icons/sourcing.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl text-white group-hover:text-black mb-2 sm:mb-3 transition-colors duration-300">{{ $t('services.sourcing.title') }}</h3>
              <p class="text-white/80 group-hover:text-black/80 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-4 sm:line-clamp-5">{{ $t('services.sourcing.description') }}</p>
            </div>
          </div>

          <!-- Card 3: Standard Card -->
          <div class="bg-primary-dark hover:bg-accent p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-start h-full min-h-[240px] sm:min-h-[280px] group transition-all duration-300">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
              <img src="/icons/transformation.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl text-white group-hover:text-black mb-2 sm:mb-3 transition-colors duration-300">{{ $t('services.transformation.title') }}</h3>
              <p class="text-white/80 group-hover:text-black/80 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-4 sm:line-clamp-5">{{ $t('services.transformation.description') }}</p>
            </div>
          </div>

          <!-- Card 4: Standard Card -->
          <div class="bg-primary-dark hover:bg-accent p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col justify-start h-full min-h-[240px] sm:min-h-[280px] group transition-all duration-300">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
              <img src="/icons/innovation.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl text-white group-hover:text-black mb-2 sm:mb-3 transition-colors duration-300">{{ $t('services.finance.title') }}</h3>
              <p class="text-white/80 group-hover:text-black/80 text-xs sm:text-sm leading-relaxed transition-colors duration-300 line-clamp-4 sm:line-clamp-5">{{ $t('services.finance.description') }}</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Additional Services: Market Intelligence & Finance -->
      <div class="mt-6 sm:mt-8 flex flex-col gap-6 sm:gap-8">
        
        <!-- Market Intelligence -->
        <div ref="marketIntelligenceCard" class="bg-primary-dark rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 overflow-hidden group hover:bg-accent transition-all duration-300">
          <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
            <!-- Image -->
            <div class="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden relative shadow-lg">
              <img 
                src="/images/market.png" 
                alt="Market Intelligence" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="w-full lg:w-1/2">
              <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
                <img src="/icons/market.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-black mb-4 sm:mb-6 transition-colors duration-300">
                {{ $t('services.marketIntelligence.title') }}
              </h3>
              <p class="text-white/80 group-hover:text-black/80 text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300">
                {{ $t('services.marketIntelligence.description') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Finance Solutions -->
        <div ref="financeSolutionsCard" class="bg-primary-dark rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 overflow-hidden group hover:bg-accent transition-all duration-300">
          <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
            <!-- Image -->
            <div class="w-full lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-[400px] rounded-xl md:rounded-2xl overflow-hidden relative shadow-lg">
              <img 
                src="/images/solution.png" 
                alt="Finance Solutions" 
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <!-- Content -->
            <div class="w-full lg:w-1/2">
              <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent group-hover:bg-primary-dark rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-300">
                <img src="/icons/solution.png" alt="icon" class="w-6 h-6 sm:w-7 sm:h-7 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h3 class="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-black mb-4 sm:mb-6 transition-colors duration-300">
                {{ $t('services.financeSolutions.title') }}
              </h3>
              <p class="text-white/80 group-hover:text-black/80 text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-300">
                {{ $t('services.financeSolutions.description') }}
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerLeft = ref(null)
const headerRight = ref(null)
const visualLeft = ref(null)
const matrixGrid = ref(null)
const marketIntelligenceCard = ref(null)
const financeSolutionsCard = ref(null)

onMounted(() => {
  // Header Animation
  gsap.from([headerLeft.value, headerRight.value], {
    scrollTrigger: {
      trigger: '#services',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    y: 60,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Visual Image Animation
  gsap.from(visualLeft.value, {
    scrollTrigger: {
      trigger: visualLeft.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    x: -50,
    autoAlpha: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  // Matrix Grid Animation
  const cards = matrixGrid.value.children
  gsap.fromTo(cards, 
    { y: 50, opacity: 0 },
    {
      scrollTrigger: {
        trigger: matrixGrid.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    }
  )

  // Market Intelligence Card - Animate from left
  gsap.from(marketIntelligenceCard.value, {
    scrollTrigger: {
      trigger: marketIntelligenceCard.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    x: -100,
    autoAlpha: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  // Finance Solutions Card - Animate from right
  gsap.from(financeSolutionsCard.value, {
    scrollTrigger: {
      trigger: financeSolutionsCard.value,
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    x: 100,
    autoAlpha: 0,
    duration: 1.2,
    ease: 'power3.out'
  })
})
</script>
