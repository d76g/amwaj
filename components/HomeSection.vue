<template>
  <section 
    id="home"
    class="min-h-screen relative overflow-hidden flex items-end pb-12 sm:pb-16 lg:pb-20"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 gsap-animate-on-mount" ref="bgImageContainer">
      <img 
        src="/images/wheat-hero.png" 
        alt="Lush green terraced agriculture fields" 
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
    </div>
    
    <!-- Commodity SVGs - Animated on Scroll with Motion Paths -->
    <!-- These will be positioned initially in AboutSection via GSAP -->
    <div class="pointer-events-none overflow-hidden" style="z-index: 9999; position: fixed; inset: 0;">
      <!-- Wheat SVG - will start in AboutSection -->
      <div ref="wheatSvg" class="fixed w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-0" style="will-change: transform; z-index: 9999;">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <path d="M50 10 L45 30 L50 35 L55 30 Z" fill="#FBD965" opacity="0.9"/>
          <path d="M50 15 L47 25 L50 28 L53 25 Z" fill="#FBD965" opacity="0.7"/>
          <path d="M50 20 L48 22 L50 24 L52 22 Z" fill="#FBD965" opacity="0.5"/>
          <line x1="50" y1="30" x2="50" y2="90" stroke="#266243" stroke-width="3" stroke-linecap="round"/>
          <circle cx="50" cy="90" r="4" fill="#266243"/>
        </svg>
      </div>

      <!-- Corn SVG - will start in AboutSection -->
      <div ref="cornSvg" class="fixed w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 opacity-0" style="will-change: transform; z-index: 9999;">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <ellipse cx="50" cy="50" rx="18" ry="45" fill="#FBD965" opacity="0.9"/>
          <path d="M50 10 L45 20 L50 25 L55 20 Z" fill="#266243" opacity="0.6"/>
          <path d="M50 30 L48 35 L50 40 L52 35 Z" fill="#266243" opacity="0.5"/>
          <path d="M50 50 L48 55 L50 60 L52 55 Z" fill="#266243" opacity="0.5"/>
          <path d="M50 70 L48 75 L50 80 L52 75 Z" fill="#266243" opacity="0.5"/>
          <line x1="50" y1="85" x2="50" y2="95" stroke="#266243" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Barley/Grain SVG - will start in AboutSection -->
      <div ref="barleySvg" class="fixed w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 opacity-0" style="will-change: transform; z-index: 9999;">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <ellipse cx="50" cy="50" rx="12" ry="40" fill="#FBD965" opacity="0.8"/>
          <line x1="50" y1="10" x2="50" y2="90" stroke="#266243" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M50 20 L45 25 L50 30 L55 25 Z" fill="#266243" opacity="0.6"/>
          <path d="M50 40 L47 43 L50 46 L53 43 Z" fill="#266243" opacity="0.5"/>
          <path d="M50 60 L47 63 L50 66 L53 63 Z" fill="#266243" opacity="0.5"/>
          <path d="M50 80 L45 85 L50 90 L55 85 Z" fill="#266243" opacity="0.6"/>
        </svg>
      </div>

      <!-- Soybean SVG - will start in AboutSection -->
      <div ref="soybeanSvg" class="fixed w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 opacity-0" style="will-change: transform; z-index: 9999;">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
          <ellipse cx="35" cy="50" rx="12" ry="18" fill="#FBD965" opacity="0.9"/>
          <ellipse cx="65" cy="50" rx="12" ry="18" fill="#FBD965" opacity="0.9"/>
          <ellipse cx="50" cy="35" rx="10" ry="15" fill="#FBD965" opacity="0.8"/>
          <ellipse cx="50" cy="65" rx="10" ry="15" fill="#FBD965" opacity="0.8"/>
          <path d="M35 50 Q50 45 65 50" stroke="#266243" stroke-width="2" fill="none" opacity="0.4"/>
          <path d="M35 50 Q50 55 65 50" stroke="#266243" stroke-width="2" fill="none" opacity="0.4"/>
        </svg>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10 lg:gap-12 items-end">
        <!-- Headline -->
        <div class="w-full">
          <h1 
            ref="headline"
            class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] gsap-animate-on-mount"
          >
            {{ $t('home.title') }}
            <span class="block text-accent mt-2 sm:mt-3">{{ $t('home.companyName') }}</span>
          </h1>
        </div>

        <!-- Description Group -->
        <div class="space-y-4 sm:space-y-6 lg:space-y-8 lg:max-w-md mt-8 lg:mt-0">
          <p 
            ref="subtitle"
            class="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed gsap-animate-on-mount"
          >
            {{ $t('home.subtitle') }}
          </p>
          
          <div ref="ctaWrapper" class="inline-block gsap-animate-on-mount">
          <NuxtLink 
            ref="ctaButton"
            to="#services"
            @click.prevent="scrollToSection('services')"
            @mouseenter="handleButtonHover"
            @mouseleave="handleButtonLeave"
            class="inline-flex items-center gap-2 bg-accent text-primary-dark pl-4 pr-1 py-2.5 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg hover:bg-white hover:text-primary-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span>{{ $t('home.cta') }}</span>
            <img 
              ref="ctaIcon"
              src="/icons/right-up.png" 
              alt="arrow up right" 
              class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 transition-all duration-300"
            />
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

// Use absolute path for public assets
const logoUrl = '/images/logo.jpeg'

const headline = ref(null)
const subtitle = ref(null)
const ctaWrapper = ref(null)
const bgImageContainer = ref(null)
const ctaButton = ref(null)
const ctaIcon = ref(null)
const wheatSvg = ref(null)
const cornSvg = ref(null)
const barleySvg = ref(null)
const soybeanSvg = ref(null)

const handleButtonHover = () => {
  if (ctaIcon.value) {
    gsap.to(ctaIcon.value, {
      rotation: 45,
      scale: 1.1,
      filter: 'brightness(0) saturate(100%)',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
  if (ctaButton.value) {
    gsap.to(ctaButton.value, {
      scale: 1.05,
      y: -2,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const handleButtonLeave = () => {
  if (ctaIcon.value) {
    gsap.to(ctaIcon.value, {
      rotation: 0,
      scale: 1,
      filter: 'none',
      duration: 0.3,
      ease: 'power2.out'
    })
  }
  if (ctaButton.value) {
    gsap.to(ctaButton.value, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    })
  }
}

const scrollToSection = async (id) => {
  if (!process.client) return

  const element = document.getElementById(id)
  if (!element) {
    console.warn(`Section with id "${id}" not found`)
    return
  }

  window.history.pushState(null, '', `#${id}`)

  await nextTick()

  const navHeight = 100 // Approximate nav height

  // Use ScrollSmoother if available
  if (window.scrollSmoother) {
    try {
      // Calculate element's position relative to smooth-content using offsetTop
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
}

onMounted(() => {
  if (!process.client) return
  
  // Immediately hide elements before animation starts to prevent flash
  gsap.set([bgImageContainer.value, headline.value, subtitle.value, ctaWrapper.value], {
    autoAlpha: 0
  })

  // Initially hide SVGs - they will appear when AboutSection is in view
  gsap.set([wheatSvg.value, cornSvg.value, barleySvg.value, soybeanSvg.value], {
    opacity: 0,
    scale: 1
  })
  
  // Show SVGs when AboutSection enters viewport
  if (process.client) {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top 90%',
        onEnter: () => {
          gsap.set([wheatSvg.value, cornSvg.value, barleySvg.value, soybeanSvg.value], {
            opacity: 0.8
          })
        },
        onEnterBack: () => {
          gsap.set([wheatSvg.value, cornSvg.value, barleySvg.value, soybeanSvg.value], {
            opacity: 0.8
          })
        }
      })
    }
  }
  
  // Set initial transform values
  gsap.set(bgImageContainer.value, { scale: 1.1 })
  gsap.set(headline.value, { y: 50 })
  gsap.set(subtitle.value, { y: 30 })
  gsap.set(ctaWrapper.value, { y: 20 })

  // Wait for splash screen to start fading before beginning animations
  // Splash screen waits 1200ms before fading, so we start animations at that point
  setTimeout(() => {
    // Check if all required elements exist before animating
    if (!bgImageContainer.value || !headline.value || !subtitle.value || !ctaWrapper.value) {
      console.warn('HomeSection: Some animation targets are not available')
      return
    }

    const tl = gsap.timeline()

    tl.to(bgImageContainer.value, {
      scale: 1,
      autoAlpha: 1,
      duration: 1.5,
      ease: 'power2.out'
    })
    .to(headline.value, {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out'
    }, "-=1")
    .to(subtitle.value, {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.8")
    .to(ctaWrapper.value, {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, "-=0.8")
  }, 1200) // Match splash screen fade start timing

  // GSAP context for managing animations
  let motionPathContext = null

  // Animate commodity SVGs along motion paths on scroll - following demo pattern
  const createMotionPaths = () => {
    if (!process.client) return

    // Revert previous context if exists
    if (motionPathContext) {
      motionPathContext.revert()
    }

    const homeSection = document.getElementById('home')
    const aboutSection = document.getElementById('about')
    const servicesSection = document.getElementById('services')
    const productsSection = document.getElementById('products')
    const globalNetworkSection = document.getElementById('global-network')
    const contactSection = document.getElementById('contact')
    const footerSection = document.querySelector('footer')
    
    if (!aboutSection) {
      setTimeout(createMotionPaths, 100)
      return
    }

    // Calculate where AboutSection will be when scrolled to top of viewport
    const aboutTop = aboutSection.offsetTop
    const aboutLeft = aboutSection.offsetLeft || 0
    const aboutWidth = aboutSection.offsetWidth || window.innerWidth
    const aboutHeight = aboutSection.offsetHeight
    
    // Calculate initial positions in AboutSection (as viewport coordinates when AboutSection is at top)
    // When AboutSection is at top of viewport, these are the screen positions
    const initialPositions = {
      wheat: {
        x: aboutLeft + aboutWidth * 0.1,
        y: aboutHeight * 0.2
      },
      corn: {
        x: aboutLeft + aboutWidth * 0.9,
        y: aboutHeight * 0.2
      },
      barley: {
        x: aboutLeft + aboutWidth * 0.15,
        y: aboutHeight * 0.8
      },
      soybean: {
        x: aboutLeft + aboutWidth * 0.85,
        y: aboutHeight * 0.8
      }
    }

    // Set initial positions of SVGs in AboutSection using transform
    // For fixed elements, we use x/y transforms relative to viewport
    gsap.set(wheatSvg.value, {
      x: initialPositions.wheat.x,
      y: initialPositions.wheat.y,
      opacity: 0.8,
      transformOrigin: 'center center'
    })
    gsap.set(cornSvg.value, {
      x: initialPositions.corn.x,
      y: initialPositions.corn.y,
      opacity: 0.8,
      transformOrigin: 'center center'
    })
    gsap.set(barleySvg.value, {
      x: initialPositions.barley.x,
      y: initialPositions.barley.y,
      opacity: 0.8,
      transformOrigin: 'center center'
    })
    gsap.set(soybeanSvg.value, {
      x: initialPositions.soybean.x,
      y: initialPositions.soybean.y,
      opacity: 0.8,
      transformOrigin: 'center center'
    })

    // Wait for positions to be set, then get bounding rects and create motion paths
    // Use double requestAnimationFrame to ensure transforms are applied
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const wheatStartRect = wheatSvg.value?.getBoundingClientRect()
        const cornStartRect = cornSvg.value?.getBoundingClientRect()
        const barleyStartRect = barleySvg.value?.getBoundingClientRect()
        const soybeanStartRect = soybeanSvg.value?.getBoundingClientRect()

        if (!wheatStartRect || !cornStartRect || !barleyStartRect || !soybeanStartRect) {
          setTimeout(createMotionPaths, 100)
          return
        }

      // Create GSAP context for cleanup
      motionPathContext = gsap.context(() => {
      // Helper function to get waypoint positions
      // Calculate waypoints based on document positions, then convert to viewport-relative
      const getWaypointPositions = (commodity, svgElement, startRect) => {
        const waypoints = []
        
        const sections = [
          { el: servicesSection, id: 'services' },
          { el: productsSection, id: 'products' },
          { el: globalNetworkSection, id: 'global-network' },
          { el: contactSection, id: 'contact' }
        ].filter(s => s.el)

        // Get starting SVG's document position
        const startDocX = startRect.left + (window.scrollX || window.pageXOffset || 0)
        const startDocY = startRect.top + (window.scrollY || window.pageYOffset || 0)
        const startCenterX = startDocX + startRect.width / 2
        const startCenterY = startDocY + startRect.height / 2

        // Calculate waypoints for each section using document positions
        sections.forEach((section) => {
          // Get document positions
          const sectionTop = section.el.offsetTop
          const sectionLeft = section.el.offsetLeft || 0
          const sectionWidth = section.el.offsetWidth || window.innerWidth
          const sectionHeight = section.el.offsetHeight
          
          // Define target positions within each section (as percentages)
          let targetPercentX = 0
          let targetPercentY = 0
          
          switch(section.id) {
            case 'services':
              switch(commodity) {
                case 'wheat': targetPercentX = 0.2; targetPercentY = 0.3; break;
                case 'corn': targetPercentX = 0.8; targetPercentY = 0.4; break;
                case 'barley': targetPercentX = 0.3; targetPercentY = 0.7; break;
                case 'soybean': targetPercentX = 0.7; targetPercentY = 0.6; break;
              }
              break;
            case 'products':
              switch(commodity) {
                case 'wheat': targetPercentX = 0.05; targetPercentY = 0.5; break;
                case 'corn': targetPercentX = 0.95; targetPercentY = 0.5; break;
                case 'barley': targetPercentX = 0.2; targetPercentY = 0.2; break;
                case 'soybean': targetPercentX = 0.8; targetPercentY = 0.8; break;
              }
              break;
            case 'global-network':
              switch(commodity) {
                case 'wheat': targetPercentX = 0.15; targetPercentY = 0.3; break;
                case 'corn': targetPercentX = 0.85; targetPercentY = 0.4; break;
                case 'barley': targetPercentX = 0.25; targetPercentY = 0.7; break;
                case 'soybean': targetPercentX = 0.75; targetPercentY = 0.6; break;
              }
              break;
            case 'contact':
              switch(commodity) {
                case 'wheat': targetPercentX = 0.1; targetPercentY = 0.4; break;
                case 'corn': targetPercentX = 0.9; targetPercentY = 0.4; break;
                case 'barley': targetPercentX = 0.2; targetPercentY = 0.8; break;
                case 'soybean': targetPercentX = 0.8; targetPercentY = 0.8; break;
              }
              break;
          }
          
          // Calculate target point in document coordinates
          const targetDocX = sectionLeft + sectionWidth * targetPercentX
          const targetDocY = sectionTop + sectionHeight * targetPercentY
          
          // For fixed elements, waypoints are relative to starting viewport position
          // Convert document positions to viewport-relative movement
          waypoints.push({
            x: targetDocX - startCenterX,
            y: targetDocY - startCenterY
          })
        })
        
        // Add final waypoint next to AMWAJ text in footer
        if (footerSection) {
          const amwajText = footerSection.querySelector('h1')
          if (amwajText) {
            // Get footer document positions
            const footerTop = footerSection.offsetTop
            const footerLeft = footerSection.offsetLeft || 0
            
            // Get text's position relative to footer using getBoundingClientRect
            const textRect = amwajText.getBoundingClientRect()
            const footerRect = footerSection.getBoundingClientRect()
            const textRelLeft = textRect.left - footerRect.left
            const textRelTop = textRect.top - footerRect.top
            
            // Calculate text center in document coordinates
            const textCenterDocX = footerLeft + textRelLeft + textRect.width / 2
            const textCenterDocY = footerTop + textRelTop + textRect.height / 2
            
            let finalX = 0
            let finalY = 0
            
            switch(commodity) {
              case 'wheat':
                finalX = (textCenterDocX - textRect.width * 0.6) - startCenterX
                finalY = textCenterDocY - startCenterY
                break
              case 'corn':
                finalX = (textCenterDocX + textRect.width * 0.6) - startCenterX
                finalY = textCenterDocY - startCenterY
                break
              case 'barley':
                finalX = (textCenterDocX - textRect.width * 0.3) - startCenterX
                finalY = (textCenterDocY - 100) - startCenterY
                break
              case 'soybean':
                finalX = (textCenterDocX + textRect.width * 0.3) - startCenterX
                finalY = (textCenterDocY - 100) - startCenterY
                break
            }
            
            waypoints.push({ x: finalX, y: finalY })
          }
        }
        
        return waypoints
      }

      // Set initial states
      gsap.set([wheatSvg.value, cornSvg.value, barleySvg.value, soybeanSvg.value], {
        opacity: 0.8,
        scale: 1
      })

      // Create timeline for each commodity (following demo pattern)
      const createCommodityTimeline = (svgElement, commodity, startRect, curviness) => {
        const points = getWaypointPositions(commodity, svgElement, startRect)
        
        if (points.length === 0) {
          console.warn(`No waypoints for ${commodity}`)
          return null
        }

        // Debug: log waypoints with detailed info
        console.log(`${commodity} waypoints:`, points)
        console.log(`${commodity} startRect:`, startRect)
        console.log(`${commodity} first waypoint:`, points[0])
        console.log(`${commodity} last waypoint:`, points[points.length - 1])

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: 'top top',
            endTrigger: footerSection || document.body,
            end: 'bottom top',
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Debug scroll progress
              if (commodity === 'wheat' && self.progress % 0.1 < 0.01) {
                console.log(`${commodity} scroll progress:`, self.progress)
              }
            }
          }
        })

        tl.to(svgElement, {
          duration: 1,
          ease: 'none',
          opacity: 0.8,
          immediateRender: true,
          motionPath: {
            path: points,
            curviness: curviness,
            autoRotate: true
          }
        })

        return tl
      }

        // Create timelines for each commodity
        createCommodityTimeline(wheatSvg.value, 'wheat', wheatStartRect, 1.5)
        createCommodityTimeline(cornSvg.value, 'corn', cornStartRect, 1.8)
        createCommodityTimeline(barleySvg.value, 'barley', barleyStartRect, 2)
        createCommodityTimeline(soybeanSvg.value, 'soybean', soybeanStartRect, 1.6)

        ScrollTrigger.refresh()
      })
      })
    })
  }

  // Initialize motion paths after DOM is ready
  const initMotionPaths = () => {
    // Wait for all sections including footer to be rendered
    if (document.getElementById('contact') && document.getElementById('products') && document.querySelector('footer')) {
      createMotionPaths()
    } else {
      setTimeout(initMotionPaths, 100)
    }
  }

  // Start initialization after a delay to ensure everything is loaded
  setTimeout(initMotionPaths, 800)

  // Recreate on resize (following demo pattern)
  window.addEventListener('resize', createMotionPaths)
})
</script>

