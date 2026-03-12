<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">Simple, transparent pricing.</h1>
        <p class="mt-4 text-lg text-neutral-content/70 max-w-xl mx-auto">
          No hidden fees. No surprises. You see a live preview before you pay a cent.
        </p>
      </div>
    </section>

    <!-- Pricing table -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-6xl mx-auto">
        <PricingPricingTable />
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 px-6 bg-base-100">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Frequently Asked Questions</h2>
          <p class="mt-3 text-base-content/60">Everything you need to know before getting started.</p>
        </div>
        <PricingFAQAccordion />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 bg-neutral text-neutral-content">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">Ready to get started?</h2>
        <p class="text-neutral-content/70">
          Tell us about your business. You'll have a live preview in 48 hours.
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

useSeoMeta({
  title: 'Pricing — 7clicks',
  ogTitle: '7clicks — Transparent Pricing',
  description: 'Landing pages from $500, business websites from $800. See a live preview before you pay. No hidden fees.',
  ogDescription: 'Landing pages from $500, business websites from $800. Free preview in 48 hours.'
})
</script>
