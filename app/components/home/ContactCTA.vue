<template>
  <section id="contact" class="py-20 px-6 bg-neutral text-neutral-content">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Left: Copy -->
        <div class="space-y-6">
          <h2 class="text-3xl sm:text-4xl font-bold leading-tight">
            {{ $t('contactCTA.title') }}
          </h2>
          <p class="text-neutral-content/70 text-lg leading-relaxed">
            {{ $t('contactCTA.subtitle') }}
          </p>
          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-3 text-neutral-content/60">
              <Mail :size="18" class="text-primary" />
              <span>{{ $t('contactCTA.email') }}</span>
            </div>
            <div class="flex items-center gap-3 text-neutral-content/60">
              <Clock :size="18" class="text-primary" />
              <span>{{ $t('contactCTA.responseTime') }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="card bg-base-100 text-base-content shadow-xl">
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
                  <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.website') }} <span class="text-base-content/40">{{ $t('contactCTA.form.optional') }}</span></span></label>
                  <input v-model="form.website" type="url" placeholder="https://..."
                         class="input input-bordered w-full" />
                </div>
                <div>
                  <label class="label"><span class="text-sm font-medium">{{ $t('contactCTA.form.message') }}</span></label>
                  <textarea v-model="form.message" :placeholder="$t('contactCTA.form.messagePlaceholder')"
                            class="textarea textarea-bordered w-full h-24" />
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
</template>

<script setup lang="ts">
import { Mail, Clock, ArrowRight } from 'lucide-vue-next'

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
</script>
