<template>
  <div class="space-y-3 max-w-2xl mx-auto">
    <div v-for="(item, index) in faqs" :key="index"
         class="collapse collapse-arrow bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-medium">{{ item.question }}</div>
      <div class="collapse-content text-base-content/70 text-sm">
        <p>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n()

const faqs = computed(() => {
  const items = tm('faq') as Array<{ question: string; answer: string }>
  return items.map(item => ({
    question: rt(item.question),
    answer: rt(item.answer)
  }))
})
</script>
