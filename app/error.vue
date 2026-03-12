<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card bg-base-100 shadow-xl max-w-md w-full">
      <div class="card-body items-center text-center">
        <h1 class="text-8xl font-black text-primary">
          {{ error?.statusCode || 500 }}
        </h1>
        <h2 class="card-title text-2xl mt-4">
          {{ title }}
        </h2>
        <p class="text-base-content/60 mt-2">
          {{ description }}
        </p>
        <div class="card-actions mt-6">
          <button class="btn btn-primary" @click="handleError">
            {{ $t('error.backHome') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const { t } = useI18n()

const errorCode = computed(() => {
  const code = props.error?.statusCode
  if (code === 404) return '404'
  if (code === 403) return '403'
  return '500'
})

const title = computed(() => t(`error.${errorCode.value}.title`))
const description = computed(() => t(`error.${errorCode.value}.description`))

const handleError = () => clearError({ redirect: '/' })
</script>
