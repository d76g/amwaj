# Amwaj - Agri-Commodities Trading Website

A modern single-page website for an agri-commodities trading company built with Nuxt.js, Vue.js, Tailwind CSS, GSAP, and Lenis.js.

## Features

- 🌐 **Bilingual Support**: English and Arabic (RTL) with i18n
- 🎨 **Modern Design**: Custom color scheme and typography
- ✨ **Smooth Animations**: GSAP and Lenis.js for smooth scrolling
- 📱 **Responsive**: Mobile-first design with Tailwind CSS
- 🎯 **Single Page**: All sections on one page with smooth navigation

## Tech Stack

- **Nuxt.js 3** - Vue.js framework
- **Vue.js 3** - Progressive JavaScript framework
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **Lenis.js** - Smooth scroll library
- **@vueuse/motion** - Motion utilities for Vue
- **@nuxtjs/i18n** - Internationalization

## Colors

- Primary Dark: `#0D6137`
- Primary: `#266243`
- Primary Light: `#EAEEE3`
- Accent: `#FBD965`
- White: `#FFFFFF`

## Fonts

- **English**: Poppins (Google Fonts)
- **Arabic**: IBM Plex Sans Arabic (Google Fonts)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
amwaj/
├── assets/
│   └── css/
│       └── main.css
├── components/
│   ├── TheNavigation.vue
│   ├── HomeSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── ProductsSection.vue
│   └── ContactSection.vue
├── locales/
│   ├── en.json
│   └── ar.json
├── pages/
│   └── index.vue
├── app.vue
├── nuxt.config.ts
└── tailwind.config.js
```

## Sections

1. **Home** - Hero section with main CTA
2. **About Amwaj** - Company information, mission, and vision
3. **Services** - Trading, sourcing, logistics, and consulting services
4. **Products** - Product categories showcase
5. **Get in Touch** - Contact form and information

## License

MIT

