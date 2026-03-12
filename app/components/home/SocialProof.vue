<template>
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-4xl sm:text-5xl font-black text-primary font-mono">{{ stat.value }}</div>
          <div class="mt-2 text-sm text-base-content/50">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '95+', label: 'Avg. PageSpeed Score' },
  { value: '48h', label: 'Preview Delivery' },
  { value: '20+', label: 'Websites Delivered' },
  { value: '100%', label: 'Mobile Optimized' }
]
</script>
