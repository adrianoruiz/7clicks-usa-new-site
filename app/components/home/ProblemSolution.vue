<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Problem -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 text-error text-sm font-medium">
            <XCircle :size="16" />
            <span>The Problem</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            Your current website is
            <span class="text-error">costing you customers.</span>
          </h2>
          <ul class="space-y-4">
            <li v-for="problem in problems" :key="problem" class="flex items-start gap-3">
              <X :size="18" class="text-error shrink-0 mt-0.5" />
              <span class="text-base-content/70">{{ problem }}</span>
            </li>
          </ul>
        </div>

        <!-- Solution -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 text-success text-sm font-medium">
            <CheckCircle :size="16" />
            <span>The Solution</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            Here's what
            <span class="text-success">we build.</span>
          </h2>
          <ul class="space-y-4">
            <li v-for="solution in solutions" :key="solution" class="flex items-start gap-3">
              <Check :size="18" class="text-success shrink-0 mt-0.5" />
              <span class="text-base-content/70">{{ solution }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { X, XCircle, Check, CheckCircle } from 'lucide-vue-next'

const problems = [
  'Slow load times that drive visitors away',
  'Outdated design that doesn\'t reflect your brand',
  'Not mobile-friendly — losing half your traffic',
  'No clear call to action — visitors leave without converting'
]

const solutions = [
  'Lightning-fast pages — 95+ PageSpeed score',
  'Modern, clean design tailored to your business',
  'Mobile-first — flawless on every device',
  'Conversion-focused — every element has a purpose'
]
</script>
