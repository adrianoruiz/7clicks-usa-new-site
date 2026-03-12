<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          {{ $t('about.heroTitle') }}
          <span class="text-primary">{{ $t('about.heroHighlight') }}</span>
        </h1>
      </div>
    </section>

    <!-- About content -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-3xl mx-auto space-y-12">
        <!-- Mission -->
        <div class="space-y-4">
          <p class="text-lg text-base-content/70 leading-relaxed">
            {{ $t('about.mission1') }}
          </p>
          <p class="text-lg text-base-content/70 leading-relaxed">
            {{ $t('about.mission2') }}
          </p>
        </div>

        <!-- Values -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="value in values" :key="value.key" class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <component :is="value.icon" :size="20" class="text-primary" />
              </div>
              <h3 class="font-bold">{{ $t(`about.values.${value.key}.title`) }}</h3>
              <p class="text-base-content/60 text-sm">{{ $t(`about.values.${value.key}.description`) }}</p>
            </div>
          </div>
        </div>

        <!-- Tech -->
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <Code :size="20" class="text-primary" />
              {{ $t('about.techTitle') }}
            </h2>
            <p class="text-base-content/60 mt-2">
              {{ $t('about.techDesc') }}
            </p>
            <div class="flex flex-wrap gap-2 mt-4">
              <span v-for="tech in techs" :key="tech" class="badge badge-outline badge-sm">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 bg-base-100">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">{{ $t('about.ctaTitle') }}</h2>
        <p class="text-base-content/60">
          {{ $t('about.ctaSubtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/portfolio" class="btn btn-outline btn-primary">
            {{ $t('about.ctaWork') }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-primary">
            {{ $t('about.ctaPreview') }}
            <ArrowRight :size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Zap, Target, Heart, Code, ArrowRight } from 'lucide-vue-next'

const { t } = useI18n()

const values = [
  { key: 'fastDelivery', icon: Zap },
  { key: 'resultsFocused', icon: Target },
  { key: 'noBs', icon: Heart }
]

const techs = ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS', 'SSR/SSG', 'PageSpeed 95+']

useSeoMeta({
  title: () => t('about.seo.title'),
  ogTitle: () => t('about.seo.ogTitle'),
  description: () => t('about.seo.description'),
  ogDescription: () => t('about.seo.ogDescription')
})
</script>
