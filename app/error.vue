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
            Back to home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const title = computed(() => {
  if (props.error?.statusCode === 404) return 'Page not found'
  if (props.error?.statusCode === 403) return 'Access denied'
  return 'Something went wrong'
})

const description = computed(() => {
  if (props.error?.statusCode === 404) return 'The page you are looking for does not exist or has been moved.'
  if (props.error?.statusCode === 403) return 'You do not have permission to access this resource.'
  return 'An unexpected error occurred. Please try again later.'
})

const handleError = () => clearError({ redirect: '/' })
</script>
