<template>
  <section class="py-20 px-6 bg-base-200">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold">Simple, transparent pricing.</h2>
        <p class="mt-4 text-base-content/60 text-lg max-w-xl mx-auto">
          No hidden fees. No surprises. Pick what fits your business.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title"
             class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div class="card-body">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <component :is="service.icon" :size="24" class="text-primary" />
            </div>
            <h3 class="card-title text-xl">{{ service.title }}</h3>
            <p class="text-base-content/60 text-sm">{{ service.description }}</p>
            <div class="mt-4">
              <span class="text-3xl font-bold">{{ service.price }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-base-content/50 mt-1">
              <Clock :size="14" />
              <span>{{ service.delivery }}</span>
            </div>
            <div class="card-actions mt-6">
              <NuxtLink to="#contact" class="btn btn-primary btn-block btn-sm">
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Monthly care add-on -->
      <div class="mt-12 text-center">
        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-base-100 shadow-sm border border-base-300">
          <Shield :size="20" class="text-secondary" />
          <span class="text-sm">
            <strong>Monthly Care:</strong> Hosting, updates & support —
            <span class="text-secondary font-semibold">$29/mo</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Globe, Clock, Shield } from 'lucide-vue-next'

const services = [
  {
    title: 'Landing Page',
    description: 'Perfect for promotions and campaigns. One focused page designed to convert.',
    price: '$500',
    delivery: '3–5 days',
    icon: FileText
  },
  {
    title: 'Business Website',
    description: 'Your complete online presence. Up to 5 pages, custom design, SEO-ready.',
    price: '$800',
    delivery: '5–7 days',
    icon: Globe
  },
  {
    title: 'Premium',
    description: 'Unlimited pages, blog/CMS, advanced features. For businesses ready to scale.',
    price: 'Custom',
    delivery: '10–14 days',
    icon: Shield
  }
]
</script>
