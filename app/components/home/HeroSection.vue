<template>
  <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral text-neutral-content">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 opacity-[0.03]"
         style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M60 0H0v60&quot; fill=&quot;none&quot; stroke=&quot;white&quot; stroke-width=&quot;0.5&quot;/%3E%3C/svg%3E'); background-size: 60px 60px;" />

    <div class="relative z-10 text-center max-w-3xl mx-auto px-6">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
        <Zap :size="14" />
        <span>Web Design for Local Businesses</span>
      </div>

      <!-- H1 -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
        Your business deserves a website that
        <span class="text-primary">actually brings customers.</span>
      </h1>

      <!-- Subtitle -->
      <p class="mt-6 text-lg sm:text-xl text-neutral-content/70 max-w-2xl mx-auto leading-relaxed">
        We design and build high-performance websites for local businesses
        across the US and Europe. Live preview in 48 hours.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <NuxtLink to="#portfolio" class="btn btn-primary btn-lg">
          See Our Work
          <ArrowRight :size="18" />
        </NuxtLink>
        <NuxtLink to="#contact" class="btn btn-outline btn-lg border-neutral-content/20 text-neutral-content hover:bg-neutral-content hover:text-neutral">
          Get a Free Preview
        </NuxtLink>
      </div>

      <!-- Trust bar -->
      <div class="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-content/50">
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>Avg. PageSpeed 95+</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>48h Live Preview</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>5-Day Delivery</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, ArrowRight, CheckCircle } from 'lucide-vue-next'
</script>
