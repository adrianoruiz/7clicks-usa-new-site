<template>
  <div class="min-h-screen bg-base-200 flex flex-col transition-colors duration-300">
    <AppNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
