<template>
  <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral text-neutral-content">
    <!-- Animated gradient mesh background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute inset-0 hero-gradient" />
    </div>

    <!-- Floating orbs -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed" />

    <!-- Subtle grid overlay -->
    <div class="absolute inset-0 opacity-[0.03]"
         style="background-image: url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cpath d=&quot;M60 0H0v60&quot; fill=&quot;none&quot; stroke=&quot;white&quot; stroke-width=&quot;0.5&quot;/%3E%3C/svg%3E'); background-size: 60px 60px;" />

    <div class="relative z-10 text-center max-w-3xl mx-auto px-6">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
        <Zap :size="14" />
        <span>{{ $t('hero.badge') }}</span>
      </div>

      <!-- H1 with gradient text -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
        {{ $t('hero.title') }}
        <span class="hero-gradient-text">{{ $t('hero.titleHighlight') }}</span>
      </h1>

      <!-- Subtitle -->
      <p class="mt-6 text-lg sm:text-xl text-neutral-content/70 max-w-2xl mx-auto leading-relaxed">
        {{ $t('hero.subtitle') }}
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <NuxtLink to="#portfolio" class="btn btn-primary btn-lg group">
          {{ $t('hero.ctaWork') }}
          <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
        </NuxtLink>
        <NuxtLink to="#contact" class="btn btn-outline btn-lg border-neutral-content/20 text-neutral-content hover:bg-neutral-content hover:text-neutral">
          {{ $t('hero.ctaPreview') }}
        </NuxtLink>
      </div>

      <!-- Trust bar -->
      <div class="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-content/50">
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>{{ $t('hero.trustPageSpeed') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>{{ $t('hero.trustPreview') }}</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle :size="16" class="text-success" />
          <span>{{ $t('hero.trustDelivery') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, ArrowRight, CheckCircle } from 'lucide-vue-next'
</script>

<style scoped>
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.3) 0%,
    rgba(139, 92, 246, 0.2) 25%,
    rgba(59, 130, 246, 0.3) 50%,
    rgba(99, 102, 241, 0.2) 75%,
    rgba(168, 85, 247, 0.3) 100%
  );
  background-size: 400% 400%;
  animation: gradient-shift 8s ease infinite;
}

.hero-gradient-text {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6, #6366f1);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 4s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 8s ease-in-out 2s infinite;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
