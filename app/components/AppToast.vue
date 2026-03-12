<template>
  <div class="toast toast-end toast-bottom z-[100]">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        role="alert"
        :class="['alert shadow-lg', alertClass(toast.type)]"
      >
        <span>{{ toast.message }}</span>
        <button class="btn btn-ghost btn-xs" @click="removeToast(toast.id)">✕</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { toasts, removeToast } = useToast()

function alertClass(type: string) {
  const map: Record<string, string> = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error'
  }
  return map[type] || 'alert-info'
}
</script>

<style scoped>
.toast-enter-active {
  transition: all 0.3s ease;
}
.toast-leave-active {
  transition: all 0.2s ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
