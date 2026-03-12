<template>
  <div>
    <HomeHeroSection />
    <div class="scroll-animate">
      <HomeProblemSolution />
    </div>
    <div class="scroll-animate delay-100">
      <HomeServicesGrid />
    </div>
    <div class="scroll-animate">
      <HomeProcessTimeline />
    </div>
    <div class="scroll-animate">
      <HomePortfolioShowcase />
    </div>
    <div class="scroll-animate">
      <HomeSocialProof />
    </div>
    <div class="scroll-animate">
      <HomeContactCTA />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const { onMounted: initScrollAnimation } = useScrollAnimation()

onMounted(() => {
  initScrollAnimation()
})

useSeoMeta({
  title: () => t('seo.homeTitle'),
  ogTitle: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogDescription: () => t('seo.homeOgDescription'),
  ogUrl: 'https://7clicks.dev',
  ogType: 'website',
  ogSiteName: '7clicks',
  ogImage: 'https://7clicks.dev/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.homeTitle'),
  twitterDescription: () => t('seo.homeOgDescription'),
  twitterImage: 'https://7clicks.dev/og-image.png'
})

// JSON-LD Organization structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '7clicks',
        url: 'https://7clicks.dev',
        logo: 'https://7clicks.dev/favicon.svg',
        description: 'Modern websites for local businesses. Custom-built, fast, mobile-first.',
        email: 'hello@7clicks.dev',
        sameAs: [
          'https://linkedin.com/company/7clicks',
          'https://github.com/7clicks'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hello@7clicks.dev',
          contactType: 'sales',
          availableLanguage: ['English', 'Portuguese']
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '500',
          offerCount: '3',
          description: 'Custom website design and development for local businesses'
        }
      })
    }
  ]
})
</script>
