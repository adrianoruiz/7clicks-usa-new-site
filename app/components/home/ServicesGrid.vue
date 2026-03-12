<template>
  <section class="py-20 px-6 bg-base-200">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold">{{ $t('services.title') }}</h2>
        <p class="mt-4 text-base-content/60 text-lg max-w-xl mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.key"
             class="card bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div class="card-body">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <component :is="service.icon" :size="24" class="text-primary" />
            </div>
            <h3 class="card-title text-xl">{{ $t(`services.${service.key}.title`) }}</h3>
            <p class="text-base-content/60 text-sm">{{ $t(`services.${service.key}.description`) }}</p>
            <div class="mt-4">
              <span class="text-3xl font-bold">{{ $t(`services.${service.key}.price`) }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-base-content/50 mt-1">
              <Clock :size="14" />
              <span>{{ $t(`services.${service.key}.delivery`) }}</span>
            </div>
            <div class="card-actions mt-6">
              <NuxtLink to="#contact" class="btn btn-primary btn-block btn-sm">
                {{ $t('services.getStarted') }}
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
            <strong>{{ $t('services.monthlyCare') }}</strong> {{ $t('services.monthlyDesc') }}
            <span class="text-secondary font-semibold">{{ $t('services.monthlyPrice') }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FileText, Globe, Clock, Shield } from 'lucide-vue-next'

const services = [
  { key: 'landing', icon: FileText },
  { key: 'business', icon: Globe },
  { key: 'premium', icon: Shield }
]
</script>
