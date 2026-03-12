<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">Let's talk.</h1>
        <p class="mt-4 text-lg text-neutral-content/70 max-w-xl mx-auto">
          Tell us about your business. We'll build a free live preview in 48 hours.
        </p>
      </div>
    </section>

    <!-- Contact form -->
    <section class="py-16 px-6 bg-base-200">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left: Info -->
          <div class="space-y-8">
            <div class="space-y-4">
              <h2 class="text-2xl font-bold">How it works</h2>
              <p class="text-base-content/60 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours.
                We'll ask a few questions about your business, then build a live preview
                you can see and share — completely free.
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">Email us directly</p>
                  <p class="text-sm text-base-content/50">hello@7clicks.dev</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">Response time</p>
                  <p class="text-sm text-base-content/50">Within 24 hours</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">Remote-first</p>
                  <p class="text-sm text-base-content/50">Serving businesses in the US &amp; Europe</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Form -->
          <div class="card bg-base-100 shadow-xl">
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
                    <label class="label">
                      <span class="text-sm font-medium">
                        Current Website URL <span class="text-base-content/40">(optional)</span>
                      </span>
                    </label>
                    <input v-model="form.website" type="url" placeholder="https://..."
                           class="input input-bordered w-full" />
                  </div>
                  <div>
                    <label class="label"><span class="text-sm font-medium">Message</span></label>
                    <textarea v-model="form.message" placeholder="Tell us about your business and what you need..."
                              class="textarea textarea-bordered w-full h-28" />
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
  </div>
</template>

<script setup lang="ts">
import { Mail, Clock, Globe, ArrowRight } from 'lucide-vue-next'

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

useSeoMeta({
  title: 'Contact — 7clicks',
  ogTitle: '7clicks — Contact Us',
  description: 'Get a free live preview of your new website in 48 hours. Tell us about your business and we\'ll get started.',
  ogDescription: 'Free live preview in 48 hours. No commitment, no credit card.'
})
</script>
