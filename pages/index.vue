<template>
  <div class="min-h-screen overflow-x-hidden w-full max-w-full">
    <TheNavigation />
    <!-- Motion Path Waypoints - Invisible markers for SVG animation -->
    <div class="motion-path-waypoints pointer-events-none">
      <div class="waypoint waypoint-wheat-1" data-commodity="wheat"></div>
      <div class="waypoint waypoint-wheat-2" data-commodity="wheat"></div>
      <div class="waypoint waypoint-wheat-3" data-commodity="wheat"></div>
      <div class="waypoint waypoint-wheat-4" data-commodity="wheat"></div>
      
      <div class="waypoint waypoint-corn-1" data-commodity="corn"></div>
      <div class="waypoint waypoint-corn-2" data-commodity="corn"></div>
      <div class="waypoint waypoint-corn-3" data-commodity="corn"></div>
      <div class="waypoint waypoint-corn-4" data-commodity="corn"></div>
      
      <div class="waypoint waypoint-barley-1" data-commodity="barley"></div>
      <div class="waypoint waypoint-barley-2" data-commodity="barley"></div>
      <div class="waypoint waypoint-barley-3" data-commodity="barley"></div>
      <div class="waypoint waypoint-barley-4" data-commodity="barley"></div>
      
      <div class="waypoint waypoint-soybean-1" data-commodity="soybean"></div>
      <div class="waypoint waypoint-soybean-2" data-commodity="soybean"></div>
      <div class="waypoint waypoint-soybean-3" data-commodity="soybean"></div>
      <div class="waypoint waypoint-soybean-4" data-commodity="soybean"></div>
    </div>
    
    <HomeSection id="home" />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <ProductsSection id="products" />
    <GlobalNetworkSection id="global-network" />
    <ContactSection id="contact" />
    <TheFooter />
  </div>
</template>

<script setup>
// SEO and Meta tags are handled in app.vue globally
</script>

