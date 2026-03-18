<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <!-- Before -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 text-error text-sm font-medium">
        <XCircle :size="16" />
        <span>{{ $t('beforeAfter.before') }}</span>
      </div>
      <div class="rounded-lg bg-base-300/50 border border-base-300 h-48 flex items-center justify-center overflow-hidden">
        <img v-if="beforeImage" :src="beforeImage" :alt="$t('beforeAfter.oldWebsite')" class="w-full h-full object-cover">
        <div v-else class="text-center text-base-content/30 space-y-2">
          <MonitorX :size="40" class="mx-auto" />
          <p class="text-xs">{{ $t('beforeAfter.oldWebsite') }}</p>
        </div>
      </div>
    </div>

    <!-- After -->
    <div class="space-y-3">
      <div class="flex items-center gap-2 text-success text-sm font-medium">
        <CheckCircle :size="16" />
        <span>{{ $t('beforeAfter.after') }}</span>
      </div>
      <div class="rounded-lg bg-linear-to-br from-primary/5 to-success/5 border border-success/20 h-48 flex items-center justify-center overflow-hidden">
        <img v-if="afterImage" :src="afterImage" :alt="$t('beforeAfter.newWebsite')" class="w-full h-full object-cover">
        <div v-else class="text-center text-base-content/30 space-y-2">
          <Monitor :size="40" class="mx-auto text-success/40" />
          <p class="text-xs">{{ $t('beforeAfter.newWebsite') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XCircle, CheckCircle, MonitorX, Monitor } from 'lucide-vue-next'

defineProps<{
  beforeImage?: string
  afterImage?: string
}>()
</script>
