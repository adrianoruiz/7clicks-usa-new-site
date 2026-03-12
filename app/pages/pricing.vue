<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">{{ $t('pricingPage.heroTitle') }}</h1>
        <p class="mt-4 text-lg text-neutral-content/70 max-w-xl mx-auto">
          {{ $t('pricingPage.heroSubtitle') }}
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
          <h2 class="text-3xl font-bold">{{ $t('pricingPage.faqTitle') }}</h2>
          <p class="mt-3 text-base-content/60">{{ $t('pricingPage.faqSubtitle') }}</p>
        </div>
        <PricingFAQAccordion />
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 bg-neutral text-neutral-content">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">{{ $t('pricingPage.ctaTitle') }}</h2>
        <p class="text-neutral-content/70">
          {{ $t('pricingPage.ctaSubtitle') }}
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg">
          {{ $t('pricingPage.ctaButton') }}
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

useSeoMeta({
  title: () => t('pricingPage.seo.title'),
  ogTitle: () => t('pricingPage.seo.ogTitle'),
  description: () => t('pricingPage.seo.description'),
  ogDescription: () => t('pricingPage.seo.ogDescription')
})
</script>
