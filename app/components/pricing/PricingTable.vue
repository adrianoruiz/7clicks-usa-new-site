<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="tier in tiers" :key="tier.name"
         class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
         :class="{ 'ring-2 ring-primary': tier.popular }">
      <div class="card-body">
        <div v-if="tier.popular" class="badge badge-primary badge-sm mb-2">Most Popular</div>
        <h3 class="text-xl font-bold">{{ tier.name }}</h3>
        <p class="text-base-content/60 text-sm mt-1">{{ tier.description }}</p>

        <div class="mt-4">
          <span class="text-3xl font-bold">{{ tier.price }}</span>
        </div>

        <div class="flex items-center gap-2 text-sm text-base-content/50 mt-1">
          <Clock :size="14" />
          <span>{{ tier.delivery }}</span>
        </div>

        <ul class="mt-6 space-y-3">
          <li v-for="feature in tier.features" :key="feature.label" class="flex items-center gap-2 text-sm">
            <Check v-if="feature.included" :size="16" class="text-success shrink-0" />
            <Minus v-else :size="16" class="text-base-content/20 shrink-0" />
            <span :class="{ 'text-base-content/40': !feature.included }">{{ feature.label }}</span>
          </li>
        </ul>

        <div class="card-actions mt-6">
          <NuxtLink to="/contact" class="btn btn-block"
                    :class="tier.popular ? 'btn-primary' : 'btn-outline btn-primary'">
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
        <strong>Monthly Care:</strong> Hosting, SSL, updates, minor edits, uptime monitoring —
        <span class="text-secondary font-semibold">$29/mo</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Check, Minus, Shield } from 'lucide-vue-next'

const tiers = [
  {
    name: 'Landing Page',
    description: 'Perfect for promotions and new campaigns.',
    price: '$500–$800',
    delivery: '3–5 days',
    popular: false,
    features: [
      { label: '1 page', included: true },
      { label: 'Mobile optimized', included: true },
      { label: 'SEO basics', included: true },
      { label: 'Contact form', included: true },
      { label: 'Custom design', included: true },
      { label: 'Blog / CMS', included: false }
    ]
  },
  {
    name: 'Business Website',
    description: 'Your complete online presence.',
    price: '$800–$1,500',
    delivery: '5–7 days',
    popular: true,
    features: [
      { label: 'Up to 5 pages', included: true },
      { label: 'Mobile optimized', included: true },
      { label: 'SEO basics', included: true },
      { label: 'Contact form', included: true },
      { label: 'Custom design', included: true },
      { label: 'Blog / CMS (+$300)', included: true }
    ]
  },
  {
    name: 'Premium',
    description: 'For businesses ready to scale.',
    price: 'Custom',
    delivery: '10–14 days',
    popular: false,
    features: [
      { label: 'Unlimited pages', included: true },
      { label: 'Mobile optimized', included: true },
      { label: 'SEO basics', included: true },
      { label: 'Contact form', included: true },
      { label: 'Custom design', included: true },
      { label: 'Blog / CMS included', included: true }
    ]
  }
]
</script>
