<template>
  <div 
    v-if="isVisible"
    ref="splashRef"
    class="fixed inset-0 z-[9999] bg-primary flex items-center justify-center"
  >
    <div class="flex flex-col items-center justify-center">
      <img 
        src="/images/logo.jpeg" 
        alt="AMWAJ COMMODITIES" 
        ref="logoRef"
        class="h-56 w-auto object-contain brightness-0 invert"
      />
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const splashRef = ref(null)
const logoRef = ref(null)
const isVisible = ref(true)

onMounted(() => {
  if (!process.client) return
  if (!logoRef.value || !splashRef.value) return

  // Prevent scrolling while splash is visible
  document.body.classList.add('splash-active')

  // Set initial state
  gsap.set(logoRef.value, {
    scale: 0.8,
    opacity: 0
  })

  // Animate logo entrance
  gsap.to(logoRef.value, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2
  })

  // Wait for page animations to initialize, then fade out splash
  const hideSplash = () => {
    if (!logoRef.value || !splashRef.value) return

    const tl = gsap.timeline({
      onComplete: () => {
        isVisible.value = false
        document.body.classList.remove('splash-active')
      }
    })

    tl.to(logoRef.value, {
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in'
    })
    .to(splashRef.value, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, "-=0.2")
  }

  // Wait for GSAP animations to set initial states (HomeSection and Navigation)
  // This ensures content is hidden before splash disappears
  setTimeout(() => {
    hideSplash()
  }, 1200) // Enough time for initial animations to set up
})

onUnmounted(() => {
  if (process.client) {
    document.body.classList.remove('splash-active')
  }
})
</script>

