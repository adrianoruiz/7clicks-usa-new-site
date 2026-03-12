<template>
  <section id="portfolio" class="py-20 px-6 bg-base-200">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold">Our work.</h2>
        <p class="mt-4 text-base-content/60 text-lg max-w-xl mx-auto">
          Real results for real businesses. Every site is custom-built, fast, and mobile-first.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.slug"
             class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
          <!-- Placeholder image area -->
          <figure class="relative h-48 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center text-base-content/20">
              <Monitor :size="48" />
            </div>
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="text-primary-content font-medium text-sm flex items-center gap-2">
                View Project <ArrowUpRight :size="16" />
              </span>
            </div>
          </figure>
          <div class="card-body p-5">
            <h3 class="font-semibold text-lg">{{ project.name }}</h3>
            <p class="text-base-content/50 text-sm">{{ project.type }} &middot; {{ project.location }}</p>
            <div class="flex items-center gap-2 mt-3">
              <div class="badge badge-success badge-sm gap-1">
                <Gauge :size="12" />
                {{ project.score }}
              </div>
              <div class="badge badge-outline badge-sm">{{ project.tag }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/portfolio" class="btn btn-outline btn-primary">
          View All Projects
          <ArrowRight :size="16" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Monitor, ArrowUpRight, ArrowRight, Gauge } from 'lucide-vue-next'

const projects = [
  {
    slug: 'bright-smile-dental',
    name: 'Bright Smile Dental',
    type: 'Dental Clinic',
    location: 'Miami, FL',
    score: 'PageSpeed 98',
    tag: 'Business Website'
  },
  {
    slug: 'oak-street-barbershop',
    name: 'Oak Street Barbershop',
    type: 'Barbershop',
    location: 'Austin, TX',
    score: 'PageSpeed 96',
    tag: 'Landing Page'
  },
  {
    slug: 'bella-cucina',
    name: 'Bella Cucina',
    type: 'Italian Restaurant',
    location: 'Chicago, IL',
    score: 'PageSpeed 97',
    tag: 'Business Website'
  }
]
</script>
