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
const { onMounted: initScrollAnimation } = useScrollAnimation()

onMounted(() => {
  initScrollAnimation()
})

useSeoMeta({
  title: '7clicks — Modern Websites for Local Businesses',
  ogTitle: '7clicks — Modern Websites for Local Businesses',
  description: 'We design and build high-performance websites for local businesses in the US and Europe. Live preview in 48 hours. Starting at $500.',
  ogDescription: 'Live preview in 48 hours. Starting at $500.'
})
</script>
