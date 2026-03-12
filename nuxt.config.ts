export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  site: {
    url: 'https://7clicks.dev'
  },

  sitemap: {
    strictNuxtContentPaths: true
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      }
    ]
  },

  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'EN', file: 'en.json' },
      { code: 'pt-BR', language: 'pt-BR', name: 'PT', file: 'pt-BR.json' }
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'en'
    },
    bundle: {
      optimizeTranslationDirective: false
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  runtimeConfig: {
    databaseUrl: process.env.DATABASE_URL,
    resendApiKey: process.env.RESEND_API_KEY,
    public: {
      appName: '7clicks'
    }
  },

  app: {
    head: {
      htmlAttrs: { 'data-theme': '7clicks' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '7clicks',
      meta: [
        { name: 'description', content: '7clicks — Modern websites for local businesses. Live preview in 48 hours. Starting at $500.' },
        { name: 'theme-color', content: '#0A5E8A' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '7clicks — Modern websites for local businesses' },
        { property: 'og:description', content: 'Live preview in 48 hours. Starting at $500.' },
        { property: 'og:image', content: 'https://7clicks.dev/og-image.png' },
        { property: 'og:url', content: 'https://7clicks.dev' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '7clicks — Modern websites for local businesses' },
        { name: 'twitter:description', content: 'Live preview in 48 hours. Starting at $500.' },
        { name: 'twitter:image', content: 'https://7clicks.dev/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
