<template>
  <section 
    id="global-network"
    class="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Header Group: Split Layout -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8 md:gap-10">
        
        <!-- Left Column -->
        <div class="w-full md:w-1/2">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            class="inline-block border border-white/20 rounded-full px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm"
          >
            <span class="text-xs sm:text-sm font-medium text-white tracking-wide uppercase">
              {{ $t('globalNetwork.eyebrow') }}
            </span>
          </div>
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="100"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-white leading-tight"
          >
            {{ $t('globalNetwork.title').split(' ')[0] }} 
            <span class="text-primary-lime">{{ $t('globalNetwork.title').split(' ').slice(1).join(' ') }}</span>
          </h2>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/3 pb-0 md:pb-2">
          <p 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="200"
            class="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed"
          >
            {{ $t('globalNetwork.description') }}
          </p>
        </div>
      </div>

      <!-- Map Visualization -->
      <div 
        v-if="points.length > 0"
        class="relative w-full aspect-[2/1] sm:aspect-[2/1] max-w-6xl mx-auto"
        v-motion
        :initial="{ opacity: 0, scale: 0.95 }"
        :visible="{ opacity: 1, scale: 1 }"
        :delay="300"
      >
        <svg 
          :viewBox="viewBox" 
          class="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <!-- Base Map Dots -->
          <circle
            v-for="(point, i) in mapPoints"
            :key="`dot-${i}`"
            :cx="point.x"
            :cy="point.y"
            r="0.15"
            :class="[
              'transition-colors duration-500',
              point.isHighlighted ? 'fill-primary-lime' : 'fill-white/15'
            ]"
          />

          <!-- Interactive Pins -->
          <g
            v-for="(pin, i) in pinPoints"
            :key="`pin-${i}`"
            class="cursor-pointer group"
            @mouseenter="activeLocation = pin.location"
            @mouseleave="activeLocation = null"
          >
            
            
            <!-- Country Name Label -->
            <text
              :x="pin.x + 1.5"
              :y="pin.y - 3"
              text-anchor="middle"
              dominant-baseline="middle"
              class="fill-white pointer-events-none"
              :style="{ fontFamily: 'Poppins, sans-serif', fontSize: isMobile ? '1.5px' : '2px', fontWeight: 600 }"
            >
              {{ $t(`globalNetwork.${pin.location.key}`) }}
            </text>
            
            <!-- Pin Shadow -->
            <circle
              :cx="pin.x"
              :cy="pin.y + 0.1"
              r="0.25"
              class="fill-black/20"
            />
            
            <!-- Pin Circle -->
            <circle
              :cx="pin.x"
              :cy="pin.y"
              r="0.25"
              class="fill-primary-lime stroke-white stroke-[0.05px] transition-all duration-300 group-hover:r-0.3 group-hover:fill-primary-lime/90"
            />
          </g>
        </svg>

        <!-- Tooltip -->
        <div 
          v-if="activeLocation"
          class="absolute pointer-events-none transition-all duration-300 z-20"
          :style="{ 
            left: `${getPinPosition(activeLocation).x}%`, 
            top: `${getPinPosition(activeLocation).y}%`,
            transform: 'translate(-50%, -100%) translateY(-8px)'
          }"
        >
           <div 
             class="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-2xl min-w-[160px] sm:min-w-[200px]"
             v-motion
             :initial="{ opacity: 0, y: 10 }"
             :enter="{ opacity: 1, y: 0 }"
           >
             <h3 class="text-primary-lime font-bold text-sm sm:text-base md:text-lg mb-1">
               {{ $t(`globalNetwork.${activeLocation.key}`) }}
             </h3>
             <p class="text-white/80 text-xs">
               {{ $t('globalNetwork.title') }} Node
             </p>
           </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import DottedMap from 'dotted-map'

const points = ref([])
const mapPoints = computed(() => points.value.filter(p => !p.isPin))
const pinPoints = computed(() => points.value.filter(p => p.isPin))
const viewBox = ref('0 0 100 50')
const activeLocation = ref(null)
const isMobile = ref(false)

// Network locations with lat/lng coordinates and their corresponding ISO country codes
const locations = [
  { key: 'mena', lat: 25.2048, lng: 55.2708, countries: ['ARE', 'SAU', 'EGY', 'IRQ', 'JOR', 'KWT', 'LBN', 'OMN', 'QAT', 'BHR', 'YEM'] },
  { key: 'usa', lat: 39.0000, lng: -98.0000, countries: ['USA'] },
  { key: 'russia', lat: 61.5240, lng: 105.3188, countries: ['RUS'] },
  { key: 'argentina', lat: -38.4161, lng: -63.6167, countries: ['ARG'] },
  { key: 'ukraine', lat: 48.3794, lng: 31.1656, countries: ['UKR'] },
  { key: 'brazil', lat: -14.2350, lng: -51.9253, countries: ['BRA'] },
  { key: 'romania', lat: 45.9432, lng: 24.9668, countries: ['ROU'] }
]

// Get all unique country codes to highlight
const allCountryCodes = [...new Set(locations.flatMap(loc => loc.countries))]

// Helper to calculate distance between two points
const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

// Helper to get relative percentage position for tooltip
const getPinPosition = (location) => {
  const pin = pinPoints.value.find(p => p.location.key === location.key)
  if (!pin) return { x: 50, y: 50 }
  
  const [,, w, h] = viewBox.value.split(' ').map(Number)
  return {
    x: (pin.x / w) * 100,
    y: (pin.y / h) * 100
  }
}

onMounted(() => {
  if (process.client) {
    isMobile.value = window.innerWidth < 640
    window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth < 640
    })
  }
  
  try {
    // Create a single map instance
    const map = new DottedMap({ height: 60, grid: 'diagonal' })
    
    // Add pins with data to identify them
    locations.forEach(loc => {
      map.addPin({
        lat: loc.lat,
        lng: loc.lng,
        data: { isPin: true, location: loc }
      })
    })
    
    // Get all points (both map dots and pins)
    const allPoints = map.getPoints()
    
    // Calculate map dimensions from base points (non-pin points)
    const basePoints = allPoints.filter(p => !p.data?.isPin)
    const xs = basePoints.map(p => p.x)
    const ys = basePoints.map(p => p.y)
    const minX = Math.min(...xs)
    const maxX = Math.max(...xs)
    const minY = Math.min(...ys)
    const maxY = Math.max(...ys)
    const mapWidth = maxX - minX
    const mapHeight = maxY - minY
    
    // Extract pin coordinates for radial highlighting
    const pinCoordinates = []
    allPoints.forEach(p => {
      if (p.data?.isPin) {
        pinCoordinates.push({
          x: p.x,
          y: p.y,
          location: p.data.location
        })
      }
    })
    
    // Calculate highlight radius based on map size (adjustable)
    // Larger radius = more area highlighted around each pin
    const highlightRadius = Math.max(mapWidth, mapHeight) * 0.08 // ~8% of map size
    
    // Process all points
    points.value = allPoints.map(p => {
      // Check if it's a pin
      if (p.data?.isPin) {
        return {
          x: p.x,
          y: p.y,
          isPin: true,
          location: p.data.location
        }
      }
      
      // Check if point is within highlight radius of any pin
      let isHighlighted = false
      for (const pinCoord of pinCoordinates) {
        const dist = distance(p.x, p.y, pinCoord.x, pinCoord.y)
        if (dist <= highlightRadius) {
          isHighlighted = true
          break
        }
      }
      
      return {
        x: p.x,
        y: p.y,
        isPin: false,
        isHighlighted
      }
    })
    
    // Set viewBox
    viewBox.value = `${minX - 2} ${minY - 2} ${mapWidth + 4} ${mapHeight + 4}`
  } catch (error) {
    console.error('Error generating map:', error)
  }
})
</script>
