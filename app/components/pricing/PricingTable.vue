<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div v-for="tier in tiers" :key="tier.key"
         class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
         :class="{ 'ring-2 ring-primary': tier.popular }">
      <div class="card-body">
        <div v-if="tier.popular" class="badge badge-primary badge-sm mb-2">{{ $t('pricingTable.mostPopular') }}</div>
        <h3 class="text-xl font-bold">{{ $t(`pricingTable.tiers.${tier.key}.name`) }}</h3>
        <p class="text-base-content/60 text-sm mt-1">{{ $t(`pricingTable.tiers.${tier.key}.description`) }}</p>

        <div class="mt-4">
          <span class="text-3xl font-bold">{{ $t(`pricingTable.tiers.${tier.key}.price`) }}</span>
        </div>

        <div class="flex items-center gap-2 text-sm text-base-content/50 mt-1">
          <Clock :size="14" />
          <span>{{ $t(`pricingTable.tiers.${tier.key}.delivery`) }}</span>
        </div>

        <ul class="mt-6 space-y-3">
          <li v-for="feature in tier.features" :key="feature.labelKey" class="flex items-center gap-2 text-sm">
            <Check v-if="feature.included" :size="16" class="text-success shrink-0" />
            <Minus v-else :size="16" class="text-base-content/20 shrink-0" />
            <span :class="{ 'text-base-content/40': !feature.included }">{{ $t(`pricingTable.features.${feature.labelKey}`) }}</span>
          </li>
        </ul>

        <div class="card-actions mt-6">
          <NuxtLink to="/contact" class="btn btn-block"
                    :class="tier.popular ? 'btn-primary' : 'btn-outline btn-primary'">
            {{ $t('pricingTable.getStarted') }}
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
        <strong>{{ $t('pricingTable.monthlyCare') }}</strong> {{ $t('pricingTable.monthlyDesc') }}
        <span class="text-secondary font-semibold">{{ $t('pricingTable.monthlyPrice') }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, Check, Minus, Shield } from 'lucide-vue-next'

const tiers = [
  {
    key: 'landing',
    popular: false,
    features: [
      { labelKey: '1page', included: true },
      { labelKey: 'mobileOptimized', included: true },
      { labelKey: 'seoBasics', included: true },
      { labelKey: 'contactForm', included: true },
      { labelKey: 'customDesign', included: true },
      { labelKey: 'blogCms', included: false }
    ]
  },
  {
    key: 'business',
    popular: true,
    features: [
      { labelKey: '5pages', included: true },
      { labelKey: 'mobileOptimized', included: true },
      { labelKey: 'seoBasics', included: true },
      { labelKey: 'contactForm', included: true },
      { labelKey: 'customDesign', included: true },
      { labelKey: 'blogCmsPlus', included: true }
    ]
  },
  {
    key: 'premium',
    popular: false,
    features: [
      { labelKey: 'unlimitedPages', included: true },
      { labelKey: 'mobileOptimized', included: true },
      { labelKey: 'seoBasics', included: true },
      { labelKey: 'contactForm', included: true },
      { labelKey: 'customDesign', included: true },
      { labelKey: 'blogCmsIncluded', included: true }
    ]
  }
]
</script>
