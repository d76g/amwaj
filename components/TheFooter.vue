<template>
  <footer ref="footerRef" class="bg-primary-forest pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-16 overflow-hidden">
    <!-- Top Section -->
    <div ref="columnsRef" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16">
      <!-- Brand Summary (2fr -> col-span-2) -->
      <div class="sm:col-span-2 lg:col-span-2">
        <h2 class="text-white text-base sm:text-lg font-bold uppercase tracking-wider mb-3 sm:mb-4 md:mb-6">AMWAJ</h2>
        <p class="text-white/80 font-light text-xs sm:text-sm max-w-xs leading-relaxed">
          {{ $t('footer.brand_text') }}
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-white font-medium text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">{{ $t('footer.nav_title') }}</h3>
        <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
          <li v-for="item in navLinks" :key="item.key">
            <NuxtLink :to="item.href" class="text-white/70 hover:text-white text-xs sm:text-sm font-light transition-colors">
              {{ $t(`nav.${item.key}`) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Services (Resources) -->
      <div>
        <h3 class="text-white font-medium text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">{{ $t('footer.resources_title') }}</h3>
        <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
          <li v-for="item in serviceLinks" :key="item.key">
            <a :href="item.href" class="text-white/70 hover:text-white text-xs sm:text-sm font-light transition-colors">
              {{ $t(`services.${item.key}.title`) }}
            </a>
          </li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-white font-medium text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">{{ $t('footer.company_title') }}</h3>
        <ul class="space-y-1.5 sm:space-y-2 md:space-y-3">
          <li v-for="item in companyLinks" :key="item.key">
            <a href="#" class="text-white/70 hover:text-white text-xs sm:text-sm font-light transition-colors">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Middle Section -->
    <div ref="middleRef" class="border-t border-white/10 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
      <p class="text-white/50 text-xs font-light">
        {{ $t('footer.copyright') }}
      </p>
      <div class="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center md:justify-end">
        <a href="#" class="text-white/70 hover:text-white text-xs font-light transition-colors">
          {{ $t('footer.legal_privacy') }}
        </a>
        <a href="#" class="text-white/70 hover:text-white text-xs font-light transition-colors">
          {{ $t('footer.legal_terms') }}
        </a>
      </div>
    </div>

    <!-- Bottom Section: Oversized Logo -->
    <div class="mt-6 sm:mt-8 md:mt-12 lg:mt-20 w-full overflow-hidden leading-none flex justify-center items-end">
      <h1 ref="logoRef" class="text-[25vw] sm:text-[22vw] md:text-[20vw] font-extrabold text-white text-center uppercase tracking-tighter opacity-10 select-none translate-y-[15%]">
        AMWAJ
      </h1>
    </div>
  </footer>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()

const footerRef = ref(null)
const columnsRef = ref(null)
const middleRef = ref(null)
const logoRef = ref(null)

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'products', href: '#products' },
  { key: 'contact', href: '#contact' }
]

const serviceLinks = [
  { key: 'trading', href: '#services' },
  { key: 'sourcing', href: '#services' },
  { key: 'transformation', href: '#services' },
  { key: 'finance', href: '#services' },
  { key: 'marketIntelligence', href: '#services' }
]

const companyLinks = computed(() => [
  { key: 'about', label: t('nav.about') },
  { key: 'careers', label: t('footer.careers') },
  { key: 'sustainability', label: t('footer.sustainability') }
])

onMounted(() => {
  if (!process.client) return

  // Wait for ScrollSmoother to initialize if available
  const initAnimations = () => {
    nextTick(() => {
      if (!footerRef.value || !columnsRef.value || !middleRef.value || !logoRef.value) {
        return
      }

      // Animate columns using gsap.from (like other sections)
      const columns = columnsRef.value.children
      gsap.from(columns, {
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })

      // Animate middle section (copyright)
      gsap.from(middleRef.value, {
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      })

      // Animate Big Logo with scroll scrub
      // Set initial state
      gsap.set(logoRef.value, { y: '100%' })
      
      gsap.to(logoRef.value, {
        y: '15%',
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.value,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1
        }
      })

      // Refresh ScrollTrigger to ensure it's properly initialized
      ScrollTrigger.refresh()
    })
  }

  // Wait for ScrollSmoother if available, otherwise initialize immediately
  if (typeof window !== 'undefined' && window.scrollSmoother) {
    // ScrollSmoother is already initialized
    initAnimations()
  } else {
    // Wait a bit for ScrollSmoother to initialize, or proceed if it's not available
    setTimeout(() => {
      initAnimations()
    }, 500)
  }
})
</script>

