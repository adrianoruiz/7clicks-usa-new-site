<template>
  <div v-if="project">
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <div class="flex items-center justify-center gap-2 text-sm text-neutral-content/50 mb-4">
          <NuxtLink to="/portfolio" class="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft :size="14" />
            Portfolio
          </NuxtLink>
          <span>/</span>
          <span>{{ project.name }}</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">{{ project.name }}</h1>
        <p class="mt-4 text-lg text-neutral-content/70">
          {{ project.type }} &middot; {{ project.location }}
        </p>
        <div class="flex justify-center gap-3 mt-6">
          <div class="badge badge-success gap-1">
            <Gauge :size="14" />
            PageSpeed {{ project.score }}
          </div>
          <div class="badge badge-outline border-neutral-content/20 text-neutral-content/60">{{ project.tag }}</div>
        </div>
      </div>
    </section>

    <!-- Hero image placeholder -->
    <section class="bg-base-200 px-6">
      <div class="max-w-4xl mx-auto -mt-8">
        <div class="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-base-300 h-64 sm:h-80 flex items-center justify-center shadow-lg">
          <div class="text-center text-base-content/20 space-y-3">
            <Monitor :size="64" class="mx-auto" />
            <p class="text-sm">Full website screenshot</p>
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
            <h2 class="text-2xl font-bold">The Challenge</h2>
          </div>
          <p class="text-base-content/70 text-lg leading-relaxed">{{ project.challenge }}</p>
        </div>

        <!-- Before / After -->
        <PortfolioBeforeAfter />

        <!-- Solution -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-primary">
            <Lightbulb :size="20" />
            <h2 class="text-2xl font-bold">Our Solution</h2>
          </div>
          <p class="text-base-content/70 text-lg leading-relaxed">{{ project.solution }}</p>
        </div>

        <!-- Results -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-success">
            <TrendingUp :size="20" />
            <h2 class="text-2xl font-bold">Results</h2>
          </div>
          <ul class="space-y-3">
            <li v-for="result in project.results" :key="result" class="flex items-start gap-3">
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
        <h2 class="text-2xl sm:text-3xl font-bold">Want similar results for your business?</h2>
        <p class="text-base-content/60">
          Get a free live preview in 48 hours. No commitment, no credit card.
        </p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg">
          Get Your Free Preview
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </section>
  </div>

  <!-- Not found -->
  <div v-else class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center space-y-4">
      <h1 class="text-2xl font-bold">Project not found</h1>
      <NuxtLink to="/portfolio" class="btn btn-primary">
        <ArrowLeft :size="16" />
        Back to Portfolio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft, ArrowRight, Monitor, Gauge,
  AlertTriangle, Lightbulb, TrendingUp, CheckCircle
} from 'lucide-vue-next'

const route = useRoute()
const { getProject } = usePortfolio()
const project = getProject(route.params.slug as string)

if (project) {
  useSeoMeta({
    title: `${project.name} — 7clicks Portfolio`,
    ogTitle: `${project.name} — 7clicks`,
    description: project.solution,
    ogDescription: `${project.type} in ${project.location}. PageSpeed ${project.score}.`
  })
}
</script>
