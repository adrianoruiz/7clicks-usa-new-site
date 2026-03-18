<template>
  <div v-if="project">
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex items-center justify-center gap-2 text-sm text-neutral-content/50 mb-4">
          <NuxtLink to="/portfolio" class="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft :size="14" />
            {{ $t('nav.portfolio') }}
          </NuxtLink>
          <span>/</span>
          <span>{{ project.name }}</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">{{ project.name }}</h1>
        <p class="mt-4 text-lg text-neutral-content/70">
          {{ $t(`portfolio.projects.${project.slug}.type`) }} &middot; {{ project.location }}
        </p>
        <div class="flex justify-center gap-3 mt-6">
          <div class="badge badge-success gap-1">
            <Gauge :size="14" />
            PageSpeed {{ project.score }}
          </div>
          <div class="badge badge-outline border-neutral-content/20 text-neutral-content/60">{{ $t(`portfolio.projects.${project.slug}.tag`) }}</div>
        </div>
      </div>
    </section>

    <!-- Hero image -->
    <section class="bg-base-200 px-6">
      <div class="max-w-4xl mx-auto -mt-8">
        <div class="rounded-xl border border-base-300 h-64 sm:h-80 overflow-hidden shadow-lg">
          <img
            v-if="project.heroImage"
            :src="project.heroImage"
            :alt="project.name"
            class="w-full h-full object-cover object-top"
          >
          <div v-else class="w-full h-full bg-linear-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
            <div class="text-center text-base-content/20 space-y-3">
              <Monitor :size="64" class="mx-auto" />
              <p class="text-sm">{{ $t('caseStudy.screenshot') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case study content -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-4xl mx-auto space-y-16">
        <!-- Challenge -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-error">
            <AlertTriangle :size="20" />
            <h2 class="text-2xl font-bold">{{ $t('caseStudy.challenge') }}</h2>
          </div>
          <p class="text-base-content/70 text-lg leading-relaxed">{{ $t(`portfolio.projects.${project.slug}.challenge`) }}</p>
        </div>

        <!-- Before / After -->
        <PortfolioBeforeAfter
          :before-image="project.beforeImage"
          :after-image="project.afterImage"
        />

        <!-- Solution -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-primary">
            <Lightbulb :size="20" />
            <h2 class="text-2xl font-bold">{{ $t('caseStudy.solution') }}</h2>
          </div>
          <p class="text-base-content/70 text-lg leading-relaxed">{{ $t(`portfolio.projects.${project.slug}.solution`) }}</p>
        </div>

        <!-- Results -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-success">
            <TrendingUp :size="20" />
            <h2 class="text-2xl font-bold">{{ $t('caseStudy.results') }}</h2>
          </div>
          <ul class="space-y-3">
            <li v-for="(result, i) in translatedResults" :key="i" class="flex items-start gap-3">
              <CheckCircle :size="18" class="text-success mt-0.5 shrink-0" />
              <span class="text-base-content/70 text-lg">{{ result }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 px-6 bg-base-100">
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold">{{ $t('caseStudy.ctaTitle') }}</h2>
        <p class="text-base-content/60">
          {{ $t('caseStudy.ctaSubtitle') }}
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg">
          {{ $t('caseStudy.ctaButton') }}
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </section>
  </div>

  <!-- Not found -->
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center space-y-4">
      <h1 class="text-2xl font-bold">{{ $t('caseStudy.notFound') }}</h1>
      <NuxtLink to="/portfolio" class="btn btn-primary">
        <ArrowLeft :size="16" />
        {{ $t('caseStudy.backToPortfolio') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft, ArrowRight, Monitor, Gauge,
  AlertTriangle, Lightbulb, TrendingUp, CheckCircle
} from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

const route = useRoute()
const { getProject } = usePortfolio()
const project = getProject(route.params.slug as string)

const translatedResults = computed(() => {
  if (!project) return []
  const items = tm(`portfolio.projects.${project.slug}.results`) as string[]
  return items.map(item => rt(item))
})

if (project) {
  useSeoMeta({
    title: `${project.name} — 7clicks Portfolio`,
    ogTitle: `${project.name} — 7clicks`,
    description: () => t(`portfolio.projects.${project.slug}.solution`),
    ogDescription: `${t(`portfolio.projects.${project.slug}.type`)} in ${project.location}. PageSpeed ${project.score}.`
  })
}
</script>
