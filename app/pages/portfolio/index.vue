<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">Our Work</h1>
        <p class="mt-4 text-lg text-neutral-content/70 max-w-xl mx-auto">
          Real results for real businesses. Every site is custom-built, fast, and mobile-first.
        </p>
      </div>
    </section>

    <!-- Projects grid -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioProjectCard v-for="project in projects" :key="project.slug" :project="project" />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 bg-base-100">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">Want similar results?</h2>
        <p class="text-base-content/60">
          We'll build a free live preview for your business in 48 hours. No commitment.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg">
          Get Your Free Preview
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { getProjects } = usePortfolio()
const projects = getProjects()

useSeoMeta({
  title: 'Portfolio — 7clicks',
  ogTitle: '7clicks — Portfolio',
  description: 'See our work: high-performance websites for local businesses across the US and Europe.',
  ogDescription: 'Real results for real businesses. Custom-built, fast, mobile-first websites.'
})
</script>
