<template>
  <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
    <div class="navbar-start">
      <!-- Mobile menu -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Menu">
          <Menu :size="20" />
        </div>
        <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg border border-base-300">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        {{ $config.public.appName }}
      </NuxtLink>
    </div>

    <!-- Desktop menu -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>

    <div class="navbar-end gap-2">
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
</script>
