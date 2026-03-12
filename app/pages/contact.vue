<template>
  <div>
    <!-- Hero -->
    <section class="py-20 px-6 bg-neutral text-neutral-content">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight">{{ $t('contactPage.heroTitle') }}</h1>
        <p class="mt-4 text-lg text-neutral-content/70 max-w-xl mx-auto">
          {{ $t('contactPage.heroSubtitle') }}
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
              <h2 class="text-2xl font-bold">{{ $t('contactPage.howItWorks') }}</h2>
              <p class="text-base-content/60 leading-relaxed">
                {{ $t('contactPage.howItWorksDesc') }}
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">{{ $t('contactPage.emailDirect') }}</p>
                  <p class="text-sm text-base-content/50">hello@7clicks.dev</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">{{ $t('contactPage.responseTime') }}</p>
                  <p class="text-sm text-base-content/50">{{ $t('contactPage.responseValue') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3 text-base-content/70">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Globe :size="18" class="text-primary" />
                </div>
                <div>
                  <p class="font-medium text-base-content">{{ $t('contactPage.remoteFirst') }}</p>
                  <p class="text-sm text-base-content/50">{{ $t('contactPage.remoteDesc') }}</p>
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
                    <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.name') }}</span></label>
                    <input v-model="form.name" type="text" :placeholder="$t('contactCTA.form.namePlaceholder')"
                           class="input input-bordered w-full" required />
                  </div>
                  <div>
                    <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.email') }}</span></label>
                    <input v-model="form.email" type="email" :placeholder="$t('contactCTA.form.emailPlaceholder')"
                           class="input input-bordered w-full" required />
                  </div>
                  <div>
                    <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.business') }}</span></label>
                    <input v-model="form.business" type="text" :placeholder="$t('contactCTA.form.businessPlaceholder')"
                           class="input input-bordered w-full" required />
                  </div>
                  <div>
                    <label class="label">
                      <span class="text-sm font-medium">
                        {{ $t('contactCTA.form.website') }} <span class="text-base-content/40">{{ $t('contactCTA.form.optional') }}</span>
                      </span>
                    </label>
                    <input v-model="form.website" type="url" placeholder="https://..."
                           class="input input-bordered w-full" />
                  </div>
                  <div>
                    <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.message') }}</span></label>
                    <textarea v-model="form.message" :placeholder="$t('contactCTA.form.messagePlaceholder')"
                              class="textarea textarea-bordered w-full h-28" />
                  </div>
                  <button type="submit" class="btn btn-primary btn-block mt-2" :class="{ 'btn-disabled': loading }">
                    <span v-if="loading" class="loading loading-spinner loading-sm" />
                    {{ loading ? $t('contactCTA.form.sending') : $t('contactCTA.form.submit') }}
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

const { t } = useI18n()
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

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    addToast(t('contactCTA.toast.success'), 'success')
    Object.assign(form, { name: '', email: '', business: '', website: '', message: '' })
  } catch {
    addToast(t('contactCTA.toast.error'), 'error')
  } finally {
    loading.value = false
  }
}

useSeoMeta({
  title: () => t('contactPage.seo.title'),
  ogTitle: () => t('contactPage.seo.ogTitle'),
  description: () => t('contactPage.seo.description'),
  ogDescription: () => t('contactPage.seo.ogDescription')
})
</script>
