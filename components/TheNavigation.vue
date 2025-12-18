<template>
  <nav 
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 md:py-6 gsap-animate-on-mount"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex-shrink-0 gsap-animate-on-mount" ref="logoRef">
          <NuxtLink to="/" class="flex items-center">
            <img 
              :src="logoUrl" 
              alt="AMWAJ COMMODITIES" 
              class="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
              loading="eager"
            />
          </NuxtLink>
        </div>
        
        <!-- Menu Capsule - Desktop -->
        <div ref="menuRef" class="hidden md:flex items-center bg-black/60 backdrop-blur-md rounded-full p-2 border border-white/10 gsap-animate-on-mount">
          <NuxtLink
            v-for="item in navItems"
            :key="item.id"
            :ref="el => { if (el) navItemRefs[item.id] = el }"
            :to="`#${item.id}`"
            class="px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-md font-medium transition-all duration-300"
            :class="activeSection === item.id 
              ? 'bg-accent text-primary-dark' 
              : 'text-white hover:text-accent'"
            @click="(e) => { e.preventDefault(); scrollToSection(item.id); }"
            @mouseenter="(e) => handleNavItemHover(e, item.id)"
            @mouseleave="(e) => handleNavItemLeave(e, item.id)"
          >
            {{ $t(`nav.${item.key}`) }}
          </NuxtLink>
        </div>

        <!-- Right Side: Lang Switcher + CTA + Mobile Menu Button -->
        <div ref="rightRef" class="flex items-center gap-2 sm:gap-4 gsap-animate-on-mount">
          <!-- Language Switcher -->
          <div class="flex bg-black/60 backdrop-blur-md rounded-full p-1 sm:p-2 border border-white/10">
            <button
              v-for="localeOption in availableLocales"
              :key="localeOption.code"
              @click.prevent="switchLocale(localeOption.code)"
              type="button"
              class="px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm lg:text-md font-bold transition-all duration-300"
              :class="currentLocale === localeOption.code 
                ? 'bg-accent text-primary-dark' 
                : 'text-white hover:text-accent'"
            >
              {{ localeOption.code.toUpperCase() }}
            </button>
          </div>

          <!-- Contact CTA - Desktop -->
          <NuxtLink 
            ref="contactButton"
            to="#contact"
            @click.prevent="scrollToSection('contact')"
            @mouseenter="handleContactButtonHover"
            @mouseleave="handleContactButtonLeave"
            class="hidden lg:flex items-center gap-2 bg-accent text-primary-dark pl-4 pr-1 py-2 rounded-full text-lg hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span>{{ $t('nav.contact') }}</span>
            <img 
              ref="contactIcon"
              src="/icons/right-up.png" 
              alt="arrow up right" 
              class="w-12 h-12 transition-all duration-300"
            />
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden flex items-center justify-center w-10 h-10 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white hover:bg-accent hover:text-primary-dark transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg 
              v-if="!mobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          ref="mobileMenuRef"
          class="md:hidden fixed left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 shadow-2xl"
          :style="{ top: `${navHeight}px`, zIndex: 45 }"
        >
          <div class="container mx-auto px-4 py-6 space-y-4">
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="`#${item.id}`"
              class="block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300"
              :class="activeSection === item.id 
                ? 'bg-accent text-primary-dark' 
                : 'text-white hover:bg-white/10'"
              @click="(e) => { e.preventDefault(); scrollToSection(item.id); toggleMobileMenu(); }"
            >
              {{ $t(`nav.${item.key}`) }}
            </NuxtLink>
            <!-- Mobile Contact CTA -->
            <NuxtLink
              to="#contact"
              @click.prevent="scrollToSection('contact'); toggleMobileMenu();"
              class="flex items-center justify-center gap-2 bg-accent text-primary-dark px-4 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
            >
              <span>{{ $t('nav.contact') }}</span>
              <img 
                src="/icons/right-up.png" 
                alt="arrow up right" 
                class="w-6 h-6"
              />
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import gsap from 'gsap'

// Register CSSPlugin to enable transform properties (scale, y, etc.)
if (process.client) {
  // CSSPlugin is included by default in GSAP, but we ensure it's available
  // Access it through gsap to ensure it's loaded
  try {
    // CSSPlugin should be auto-registered, but accessing it ensures it's available
    if (gsap.plugins && typeof gsap.plugins.CSSPlugin !== 'undefined') {
      // Plugin is already registered
    }
  } catch (e) {
    // CSSPlugin should work by default
  }
}

const { locale, locales, setLocale } = useI18n()
const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

// Use absolute path for public assets
const logoUrl = '/images/logo.jpeg'

const navRef = ref(null)
const logoRef = ref(null)
const menuRef = ref(null)
const rightRef = ref(null)
const contactButton = ref(null)
const contactIcon = ref(null)
const navItemRefs = ref({})

const navItems = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'products', key: 'products' },
  { id: 'contact', key: 'contact' }
]

const activeSection = ref('home')
const isScrolling = ref(false)
const mobileMenuOpen = ref(false)
const mobileMenuRef = ref(null)
const navHeight = ref(100)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const handleContactButtonHover = () => {
  if (contactIcon.value) {
    gsap.to(contactIcon.value, {
      rotation: 45,
      scale: 1.1,
      filter: 'brightness(0) saturate(100%)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
  if (contactButton.value) {
    gsap.to(contactButton.value, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleContactButtonLeave = () => {
  if (contactIcon.value) {
    gsap.to(contactIcon.value, {
      rotation: 0,
      scale: 1,
      filter: 'none',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
  if (contactButton.value) {
    gsap.to(contactButton.value, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleNavItemHover = (event, itemId) => {
  const navItem = navItemRefs.value[itemId]
  if (navItem && activeSection.value !== itemId) {
    gsap.to(navItem, {
      scale: 1.05,
      y: -1,
      duration: 0.2,
      ease: 'power2.out'
    })
  }
}

const handleNavItemLeave = (event, itemId) => {
  const navItem = navItemRefs.value[itemId]
  if (navItem && activeSection.value !== itemId) {
    gsap.to(navItem, {
      scale: 1,
      y: 0,
      duration: 0.2,
      ease: 'power2.out'
    })
  }
}

onMounted(() => {
  if (!process.client) return
  
  // Immediately hide elements before animation starts to prevent flash
  if (navRef.value) {
    gsap.set(navRef.value, { y: -100, autoAlpha: 0 })
  }
  const elementsToHide = [logoRef.value, menuRef.value, rightRef.value].filter(Boolean)
  if (elementsToHide.length > 0) {
    gsap.set(elementsToHide, { y: -20, autoAlpha: 0 })
  }
  // Mobile menu visibility is controlled by v-if, no need to set here
  
  // Wait for splash screen to start fading before beginning animations
  // Splash screen waits 1200ms before fading, so we start animations at that point
  setTimeout(() => {
    // Check if elements exist before animating
    if (!navRef.value) return
    
    // GSAP Animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.to(navRef.value, {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      delay: 0.2
    })
    
    const elementsToAnimate = [logoRef.value, menuRef.value, rightRef.value].filter(Boolean)
    if (elementsToAnimate.length > 0) {
      tl.to(elementsToAnimate, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5")
    }
  }, 1200) // Match splash screen fade start timing

  // Expose navbar height as CSS variable and set up observer
  const updateNavHeight = () => {
    const height = navRef.value?.offsetHeight || 100
    navHeight.value = height
    document.documentElement.style.setProperty('--nav-height', `${height}px`)
    return height
  }
  
  updateNavHeight()
  
  // Update nav height on resize
  const resizeObserver = new ResizeObserver(() => {
    updateNavHeight()
  })
  if (navRef.value) {
    resizeObserver.observe(navRef.value)
  }

  // Watch for mobile menu open/close to ensure nav height is updated
  watch(mobileMenuOpen, () => {
    nextTick(() => {
      updateNavHeight()
    })
  })

  // Create observer with proper rootMargin format
  let observer = null
  
  const createObserver = () => {
    // Disconnect existing observer if any
    if (observer) {
      observer.disconnect()
    }
    
    const height = navHeight.value || 100
    // Ensure rootMargin is a valid CSS value (must be pixels or percent)
    const rootMarginValue = `-${Math.max(0, height)}px 0px 0px 0px`
    
    const observerOptions = {
      root: null,
      rootMargin: rootMarginValue,
      threshold: 0.1
    }
   
    const observerCallback = (entries) => {
      // Don't update active section if we're programmatically scrolling
      if (isScrolling.value) return
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId && navItems.some(item => item.id === sectionId)) {
            activeSection.value = sectionId
          }
        }
      })
    }

    observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })
  }

  // Create initial observer
  createObserver()
  
  // Recreate observer when navHeight changes
  watch(navHeight, () => {
    nextTick(() => {
      createObserver()
    })
  })

  // Check on mount
  nextTick(() => {
    // No fallback scroll logic anymore
  })

  // Cleanup
  onUnmounted(() => {
    observer.disconnect()
    if (navRef.value) {
      resizeObserver.disconnect()
    }
  })
})

const scrollToSection = async (id) => {
  if (!process.client) return

  const element = document.getElementById(id)
  if (!element) return

  // Close mobile menu if open
  if (mobileMenuOpen.value) {
    mobileMenuOpen.value = false
  }

  // Set scrolling flag to prevent IntersectionObserver from interfering
  isScrolling.value = true
  activeSection.value = id
  window.history.pushState(null, '', `#${id}`)

  await nextTick()

  // Get navigation height
  const navHeight = navRef.value?.offsetHeight || 100

  // Use ScrollSmoother if available
  if (window.scrollSmoother) {
    try {
      // Calculate element's position relative to smooth-content using offsetTop
      // This is more reliable with ScrollSmoother's transform-based scrolling
      const smoothContent = document.getElementById('smooth-content')
      let targetPosition = 0
      
      if (smoothContent) {
        let currentElement = element
        
        // Calculate offsetTop relative to smooth-content
        while (currentElement && currentElement !== smoothContent) {
          targetPosition += currentElement.offsetTop
          currentElement = currentElement.offsetParent
          if (!currentElement || currentElement === document.body || currentElement === document.documentElement) {
            break
          }
        }
      } else {
        // Fallback: calculate relative to document
        let currentElement = element
        while (currentElement) {
          targetPosition += currentElement.offsetTop
          currentElement = currentElement.offsetParent
          if (!currentElement || currentElement === document.body) break
        }
      }
      
      // Apply navigation offset
      targetPosition = Math.max(0, targetPosition - navHeight)
      
      // Scroll using ScrollSmoother with calculated position
      window.scrollSmoother.scrollTo(targetPosition, true)
    } catch (error) {
      console.error('ScrollSmoother scroll error:', error)
      // Fallback to standard scroll
      const rect = element.getBoundingClientRect()
      const currentScrollY = window.scrollY || window.pageYOffset || 0
      const targetPosition = rect.top + currentScrollY - navHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  } else {
    // Standard scroll without ScrollSmoother
    const rect = element.getBoundingClientRect()
    const currentScrollY = window.scrollY || window.pageYOffset || 0
    const targetPosition = rect.top + currentScrollY - navHeight
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
  
  // Re-enable IntersectionObserver after scroll completes
  setTimeout(() => {
    isScrolling.value = false
  }, 1000) // Wait for smooth scroll to complete
}

const switchLocale = async (code) => {
  if (code === currentLocale.value) return
  
  try {
    await setLocale(code)
    // The i18n plugin will handle the direction update via watcher
    // But we can also update immediately for better UX
    if (process.client) {
      await nextTick()
      const dir = code === 'ar' ? 'rtl' : 'ltr'
      const lang = code === 'ar' ? 'ar' : 'en'
      document.documentElement.setAttribute('dir', dir)
      document.documentElement.setAttribute('lang', lang)
    }
  } catch (error) {
    console.error('Error switching locale:', error)
  }
}
</script>
