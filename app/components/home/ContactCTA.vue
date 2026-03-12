<template>
  <section id="contact" class="py-20 px-6 bg-neutral text-neutral-content">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left: Copy -->
        <div class="space-y-6">
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            Ready to see what your new website looks like?
          </h2>
          <p class="text-neutral-content/70 text-lg leading-relaxed">
            Tell us about your business. We'll build a free live preview in 48 hours.
            No commitment, no credit card.
          </p>
          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-3 text-neutral-content/60">
              <Mail :size="18" class="text-primary" />
              <span>hello@7clicks.dev</span>
            </div>
            <div class="flex items-center gap-3 text-neutral-content/60">
              <Clock :size="18" class="text-primary" />
              <span>We respond within 24 hours</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="card bg-base-100 text-base-content shadow-xl">
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <fieldset class="fieldset space-y-4" :disabled="loading">
                <div>
                  <label class="label"><span class="text-sm font-medium">Name</span></label>
                  <input v-model="form.name" type="text" placeholder="John Smith"
                         class="input input-bordered w-full" required />
                </div>
                <div>
                  <label class="label"><span class="text-sm font-medium">Email</span></label>
                  <input v-model="form.email" type="email" placeholder="john@business.com"
                         class="input input-bordered w-full" required />
                </div>
                <div>
                  <label class="label"><span class="text-sm font-medium">Business Name</span></label>
                  <input v-model="form.business" type="text" placeholder="Your business name"
                         class="input input-bordered w-full" required />
                </div>
                <div>
                  <label class="label"><span class="text-sm font-medium">Current Website URL <span class="text-base-content/40">(optional)</span></span></label>
                  <input v-model="form.website" type="url" placeholder="https://..."
                         class="input input-bordered w-full" />
                </div>
                <div>
                  <label class="label"><span class="text-sm font-medium">Message</span></label>
                  <textarea v-model="form.message" placeholder="Tell us about your business and what you need..."
                            class="textarea textarea-bordered w-full h-24" />
                </div>
                <button type="submit" class="btn btn-primary btn-block mt-2" :class="{ 'btn-disabled': loading }">
                  <span v-if="loading" class="loading loading-spinner loading-sm" />
                  {{ loading ? 'Sending...' : 'Get My Free Preview' }}
                  <ArrowRight v-if="!loading" :size="16" />
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mail, Clock, ArrowRight } from 'lucide-vue-next'

const { addToast } = useToast()

const loading = ref(false)
const form = reactive({
  name: '',
  email: '',
  business: '',
  website: '',
  message: ''
})

async function handleSubmit() {
  loading.value = true

  // TODO: Replace with actual API endpoint (server/api/contact.post.ts or external service)
  await new Promise(resolve => setTimeout(resolve, 1000))

  addToast('Message sent! We\'ll get back to you within 24 hours.', 'success')

  Object.assign(form, { name: '', email: '', business: '', website: '', message: '' })
  loading.value = false
}
</script>
