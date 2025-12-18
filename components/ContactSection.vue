<template>
  <section 
    id="contact"
    class="py-12 sm:py-16 md:py-20 lg:py-24 bg-white"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <h2 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-3 sm:mb-4"
        >
          {{ $t('contact.title') }}
        </h2>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="100"
          class="text-base sm:text-lg md:text-xl text-primary text-center mb-8 sm:mb-10 md:mb-12"
        >
          {{ $t('contact.subtitle') }}
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible="{ opacity: 1, x: 0 }"
            class="space-y-6"
          >
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-primary font-semibold mb-1 text-base md:text-lg">{{ $t('contact.address') }}</h3>
                <p class="text-primary/80 text-sm md:text-base">{{ $t('contact.addressLine1') }}</p>
                <p class="text-primary/80 text-sm md:text-base">{{ $t('contact.addressLine2') }}</p>
                <p class="text-primary/80 text-sm md:text-base">{{ $t('contact.addressLine3') }}</p>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>  
              <div>
                <h3 class="text-primary font-semibold mb-1 text-base md:text-lg">{{ $t('contact.phone') }}</h3>
                <a :href="`tel:${$t('contact.phoneNumber')}`" class="text-primary/80 hover:text-primary transition-colors text-sm md:text-base">
                  {{ $t('contact.phoneNumber') }}
                </a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-primary font-semibold mb-1 text-base md:text-lg">{{ $t('contact.emailLabel') }}</h3>
                <a :href="`mailto:${$t('contact.emailUser')}@${$t('contact.emailDomain')}`" class="text-primary/80 hover:text-primary transition-colors text-sm md:text-base">
                  {{ $t('contact.emailUser') }}@{{ $t('contact.emailDomain') }}
                </a>
              </div>
            </div>

            <div class="mt-8 hidden md:block">
              <img src="/images/wheat-2.png" alt="Wheat Field" class="w-full h-48 object-cover rounded-xl shadow-md" />
            </div>
          </div>
          
          <form 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            class="space-y-4 md:space-y-6"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label class="block text-primary font-medium mb-1 md:mb-2 text-sm md:text-base">
                {{ $t('contact.name') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors shadow-sm text-sm md:text-base"
                :placeholder="$t('contact.name')"
              />
            </div>
            
            <div>
              <label class="block text-primary font-medium mb-1 md:mb-2 text-sm md:text-base">
                {{ $t('contact.email') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors shadow-sm text-sm md:text-base"
                :placeholder="$t('contact.email')"
              />
            </div>
            
            <div>
              <label class="block text-primary font-medium mb-1 md:mb-2 text-sm md:text-base">
                {{ $t('contact.message') }}
              </label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-gray-200 text-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors shadow-sm resize-none text-sm md:text-base"
                :placeholder="$t('contact.message')"
              ></textarea>
            </div>
            
            <button
              type="submit"
              class="w-full px-6 py-2.5 md:py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transform hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base"
            >
              {{ $t('contact.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form)
  alert('Thank you for your message! We will get back to you soon.')
  
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

