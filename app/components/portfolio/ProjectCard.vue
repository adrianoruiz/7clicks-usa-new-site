<template>
  <NuxtLink :to="`/portfolio/${project.slug}`"
             class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
    <figure class="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
      <div class="absolute inset-0 flex items-center justify-center text-base-content/20">
        <Monitor :size="48" />
      </div>
      <div class="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-primary-content font-medium text-sm flex items-center gap-2">
          View Case Study <ArrowUpRight :size="16" />
        </span>
      </div>
    </figure>
    <div class="card-body p-5">
      <h3 class="font-semibold text-lg">{{ project.name }}</h3>
      <p class="text-base-content/50 text-sm">{{ project.type }} &middot; {{ project.location }}</p>
      <div class="flex items-center gap-2 mt-3">
        <div class="badge badge-success badge-sm gap-1">
          <Gauge :size="12" />
          PageSpeed {{ project.score }}
        </div>
        <div class="badge badge-outline badge-sm">{{ project.tag }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Monitor, ArrowUpRight, Gauge } from 'lucide-vue-next'
import type { Project } from '~/composables/usePortfolio'

defineProps<{ project: Project }>()
</script>
