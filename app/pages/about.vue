<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
          We're a remote web agency obsessed with
          <span class="text-primary">speed and simplicity.</span>
        </h1>
      </div>
    </section>

    <!-- About content -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-3xl mx-auto space-y-12">
        <!-- Mission -->
        <div class="space-y-4">
          <p class="text-lg text-base-content/70 leading-relaxed">
            We build high-performance websites for local businesses across the US and Europe.
            No bloated templates. No page builders. Just clean, custom code that loads fast
            and looks great on every device.
          </p>
          <p class="text-lg text-base-content/70 leading-relaxed">
            We believe every local business — from dental clinics to barbershops to restaurants —
            deserves a website that actually brings in customers. Not just a digital business card,
            but a conversion machine.
          </p>
        </div>

        <!-- Values -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="value in values" :key="value.title" class="card bg-base-100 shadow-sm">
            <div class="card-body">
              <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <component :is="value.icon" :size="20" class="text-primary" />
              </div>
              <h3 class="font-bold">{{ value.title }}</h3>
              <p class="text-base-content/60 text-sm">{{ value.description }}</p>
            </div>
          </div>
        </div>

        <!-- Tech -->
        <div class="card bg-base-100 shadow-sm">
          <div class="card-body">
            <h2 class="text-xl font-bold flex items-center gap-2">
              <Code :size="20" class="text-primary" />
              Built with modern tech
            </h2>
            <p class="text-base-content/60 mt-2">
              Every site we build uses Nuxt, Vue, and Tailwind CSS — the same stack behind some of the
              fastest websites on the internet. No WordPress. No Wix. No compromises on performance.
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
        <h2 class="text-2xl sm:text-3xl font-bold">Let's build something great.</h2>
        <p class="text-base-content/60">
          See what your new website could look like — free preview in 48 hours.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/portfolio" class="btn btn-outline btn-primary">
            See Our Work
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-primary">
            Get Your Free Preview
            <ArrowRight :size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Zap, Target, Heart, Code, ArrowRight } from 'lucide-vue-next'

const values = [
  {
    title: 'Fast Delivery',
    description: 'Live preview in 48 hours. Full site in 5-7 days. We move fast without cutting corners.',
    icon: Zap
  },
  {
    title: 'Results-Focused',
    description: 'Every design decision is made to help your business get more customers online.',
    icon: Target
  },
  {
    title: 'No BS',
    description: 'Transparent pricing. No contracts. You see the work before you pay a cent.',
    icon: Heart
  }
]

const techs = ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS', 'SSR/SSG', 'PageSpeed 95+']

useSeoMeta({
  title: 'About — 7clicks',
  ogTitle: '7clicks — About Us',
  description: 'We\'re a remote web agency that builds high-performance websites for local businesses. Fast delivery, modern tech, no BS.',
  ogDescription: 'Remote web agency obsessed with speed and simplicity.'
})
</script>
