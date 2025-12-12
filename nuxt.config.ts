// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/icon'
  ],
  app: {
    head: {
      title: 'Bruno Groth | Full Stack Engineer',
      meta: [
        { name: 'description', content: 'Portfolio of Bruno Groth, a Full Stack Software Engineer specializing in PHP, Laravel, and Vue.js.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  }
})
