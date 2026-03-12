<template>
  <footer class="footer footer-center bg-base-100 text-base-content border-t border-base-300 p-6">
    <aside>
      <p>&copy; {{ year }} {{ $config.public.appName }}. All rights reserved.</p>
    </aside>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
