import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin({
  name: 'gsap-scroll-smoother',
  setup() {
    if (process.client) {
      gsap.registerPlugin(ScrollTrigger)

      // Wait for DOM to be ready
      if (typeof window !== 'undefined') {
        const initScrollSmoother = async () => {
          try {
            // Try to import ScrollSmoother (premium plugin)
            // Note: ScrollSmoother requires a Club GreenSock membership
            // If you don't have it, you can use Lenis (already installed) as an alternative
            const { ScrollSmoother } = await import('gsap/ScrollSmoother')
            
            if (ScrollSmoother) {
              gsap.registerPlugin(ScrollSmoother)

              const smoothWrapper = document.getElementById('smooth-wrapper')
              const smoothContent = document.getElementById('smooth-content')

              if (smoothWrapper && smoothContent) {
                // Create the smooth scroller
                const smoother = ScrollSmoother.create({
                  wrapper: '#smooth-wrapper',
                  content: '#smooth-content',
                  smooth: 2,
                  effects: true,
                  normalizeScroll: true
                })

                // Make smoother available globally for navigation
                ;(window as any).scrollSmoother = smoother

                // Refresh ScrollTrigger after ScrollSmoother is created
                ScrollTrigger.refresh()
              }
            }
          } catch (error) {
            console.warn('ScrollSmoother not available. Using standard smooth scroll.', error)
            // Fallback: Remove wrapper structure if ScrollSmoother is not available
            const smoothWrapper = document.getElementById('smooth-wrapper')
            const smoothContent = document.getElementById('smooth-content')
            if (smoothWrapper && smoothContent) {
              smoothWrapper.style.position = 'relative'
              smoothWrapper.style.height = 'auto'
              smoothContent.style.transform = 'none'
            }
          }
        }

        // Initialize immediately if DOM is ready, otherwise wait for load
        // Using requestAnimationFrame ensures smooth initialization without flash
        const initWhenReady = () => {
          if (document.readyState === 'complete' || document.readyState === 'interactive') {
            requestAnimationFrame(() => {
              requestAnimationFrame(initScrollSmoother)
            })
          } else {
            window.addEventListener('load', () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(initScrollSmoother)
              })
            })
          }
        }
        
        initWhenReady()
      }
    }
  }
})

