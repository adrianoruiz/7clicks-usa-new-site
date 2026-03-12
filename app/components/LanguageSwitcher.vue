<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="btn btn-ghost btn-sm gap-1">
      <Languages :size="18" />
      <span class="text-xs font-semibold">{{ currentLocale?.name }}</span>
    </div>
    <ul tabindex="0"
        class="dropdown-content menu menu-sm bg-base-100 rounded-box z-50 mt-2 w-32 p-2 shadow-lg border border-base-300">
      <li v-for="loc in locales" :key="loc.code">
        <button :class="{ 'active': locale === loc.code }" @click="switchLocale(loc.code)">
          {{ loc.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Languages } from 'lucide-vue-next'

const { locale, locales, setLocale } = useI18n()

const currentLocale = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).find(l => l.code === locale.value)
)

function switchLocale(code: string) {
  setLocale(code)
}
</script>
