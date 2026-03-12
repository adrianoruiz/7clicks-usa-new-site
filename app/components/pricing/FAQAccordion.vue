<template>
  <div class="space-y-3 max-w-2xl mx-auto">
    <div v-for="item in faqs" :key="item.question"
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
const faqs = [
  {
    question: 'Do I pay before seeing anything?',
    answer: 'No. We build a free live preview first. You only pay if you love it and want to go live.'
  },
  {
    question: 'How do I pay?',
    answer: 'Via Wise or PayPal. Simple international transfer — no complicated invoicing.'
  },
  {
    question: 'Can I cancel Monthly Care?',
    answer: 'Yes, anytime. No contracts, no cancellation fees. Your site stays yours.'
  },
  {
    question: 'Do you redesign existing sites?',
    answer: 'Yes. Same process, same pricing. We\'ll rebuild your site from scratch with modern tech and design.'
  },
  {
    question: 'What tech do you use?',
    answer: 'We build with Nuxt, Vue, and Tailwind CSS — modern, fast, and SEO-friendly. No WordPress, no page builders.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, through our Monthly Care plan ($29/mo). It includes hosting, SSL, updates, minor edits, and uptime monitoring.'
  }
]
</script>
