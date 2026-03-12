<template>
  <label class="swap swap-rotate btn btn-ghost btn-sm" aria-label="Toggle theme">
    <input type="checkbox" :checked="currentTheme === 'dark'" @change="toggleTheme" />
    <Sun class="swap-off" :size="20" />
    <Moon class="swap-on" :size="20" />
  </label>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'

const themes = ['light', 'dark'] as const
const currentTheme = useState('theme', () => 'light')

function toggleTheme() {
  const next = currentTheme.value === 'light' ? 'dark' : 'light'
  currentTheme.value = next
  if (import.meta.client) {
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved && (themes as readonly string[]).includes(saved)) {
    currentTheme.value = saved
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})
</script>
