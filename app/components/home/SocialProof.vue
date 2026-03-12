<template>
  <section ref="sectionRef" class="py-20 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.key" class="group">
          <div class="text-4xl sm:text-5xl font-black text-primary font-mono transition-transform duration-300 group-hover:scale-110">
            {{ stat.current.value }}{{ stat.suffix }}
          </div>
          <div class="mt-2 text-sm text-base-content/50">{{ $t(`stats.${stat.key}`) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)

const stats = [
  { ...useCountUp(95, 2000), suffix: '+', key: 'pageSpeed' },
  { ...useCountUp(48, 1500), suffix: 'h', key: 'preview' },
  { ...useCountUp(20, 1800), suffix: '+', key: 'websites' },
  { ...useCountUp(100, 2200), suffix: '%', key: 'mobile' }
]

onMounted(() => {
  if (!sectionRef.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => stat.animate())
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  observer.observe(sectionRef.value)
})
</script>
