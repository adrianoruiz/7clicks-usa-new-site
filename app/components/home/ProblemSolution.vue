<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Problem -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 text-error text-sm font-medium">
            <XCircle :size="16" />
            <span>{{ $t('problem.label') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            {{ $t('problem.title') }}
            <span class="text-error">{{ $t('problem.titleHighlight') }}</span>
          </h2>
          <ul class="space-y-4">
            <li v-for="(item, i) in tm('problem.items')" :key="i" class="flex items-start gap-3">
              <X :size="18" class="text-error shrink-0 mt-0.5" />
              <span class="text-base-content/70">{{ rt(item) }}</span>
            </li>
          </ul>
        </div>

        <!-- Solution -->
        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 text-success text-sm font-medium">
            <CheckCircle :size="16" />
            <span>{{ $t('solution.label') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            {{ $t('solution.title') }}
            <span class="text-success">{{ $t('solution.titleHighlight') }}</span>
          </h2>
          <ul class="space-y-4">
            <li v-for="(item, i) in tm('solution.items')" :key="i" class="flex items-start gap-3">
              <Check :size="18" class="text-success shrink-0 mt-0.5" />
              <span class="text-base-content/70">{{ rt(item) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { X, XCircle, Check, CheckCircle } from 'lucide-vue-next'

const { tm, rt } = useI18n()
</script>
