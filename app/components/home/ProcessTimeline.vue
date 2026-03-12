<template>
  <section class="py-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold">How it works.</h2>
        <p class="mt-4 text-base-content/60 text-lg max-w-xl mx-auto">
          From first contact to launch — simple, fast, no commitment until you're happy.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(step, index) in steps" :key="step.title" class="relative">
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
const steps = [
  {
    title: 'We find your business',
    description: 'We research your online presence and identify opportunities for growth.'
  },
  {
    title: 'We build a preview',
    description: 'In 48 hours, you receive a live preview of your new website. No commitment.'
  },
  {
    title: 'You review & we refine',
    description: 'Give us feedback. We adjust until it\'s perfect for your brand.'
  },
  {
    title: 'Launch & grow',
    description: 'Your site goes live. We handle hosting, updates and ongoing support.'
  }
]
</script>
