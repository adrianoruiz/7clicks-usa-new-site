import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint'
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    public: {
      appName: '7clicks'
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '7clicks',
      meta: [
        { name: 'description', content: '7clicks - Professional Development and AI Engineering' },
        { name: 'theme-color', content: '#570df8' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  nitro: {
    preset: process.env.NITRO_PRESET || 'node-server'
  },

  typescript: {
    strict: true,
    typeCheck: 'build'
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg']
  }
})
