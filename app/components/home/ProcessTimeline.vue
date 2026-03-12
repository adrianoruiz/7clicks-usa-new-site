<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold">{{ $t('process.title') }}</h2>
        <p class="mt-4 text-base-content/60 text-lg max-w-xl mx-auto">
          {{ $t('process.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, index) in steps" :key="index" class="relative">
          <!-- Step number -->
          <div class="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold text-sm mb-4">
            {{ index + 1 }}
          </div>

          <!-- Connector line (hidden on last item) -->
          <div v-if="index < steps.length - 1"
               class="hidden lg:block absolute top-5 left-12 w-[calc(100%-3rem)] h-px bg-base-300" />

          <h3 class="text-lg font-semibold mb-2">{{ step.title }}</h3>
          <p class="text-base-content/60 text-sm leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()

const steps = computed(() => {
  const items = tm('process.steps') as Array<{ title: string; description: string }>
  return items.map(item => ({
    title: rt(item.title),
    description: rt(item.description)
  }))
})
</script>
