<template>
  <footer class="bg-neutral text-neutral-content">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <!-- Brand -->
        <div class="space-y-3">
          <NuxtLink to="/" class="text-xl font-bold">7clicks</NuxtLink>
          <p class="text-neutral-content/60 text-sm max-w-xs">
            {{ $t('footer.tagline') }}
          </p>
        </div>

        <!-- Links -->
        <div class="flex gap-12">
          <div>
            <h4 class="text-sm font-semibold mb-3 text-neutral-content/40 uppercase tracking-wider">{{ $t('footer.company') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/portfolio" class="hover:text-primary transition-colors">{{ $t('nav.portfolio') }}</NuxtLink></li>
              <li><NuxtLink to="/pricing" class="hover:text-primary transition-colors">{{ $t('nav.pricing') }}</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-primary transition-colors">{{ $t('nav.about') }}</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-primary transition-colors">{{ $t('nav.contact') }}</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold mb-3 text-neutral-content/40 uppercase tracking-wider">{{ $t('footer.connect') }}</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="https://linkedin.com/company/7clicks" target="_blank" rel="noopener noreferrer"
                   class="hover:text-primary transition-colors flex items-center gap-2">
                  <Linkedin :size="14" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/7clicks" target="_blank" rel="noopener noreferrer"
                   class="hover:text-primary transition-colors flex items-center gap-2">
                  <Github :size="14" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-neutral-content/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-neutral-content/40">
        <p>&copy; {{ year }} {{ $t('footer.copyright') }}</p>
        <p>hello@7clicks.dev</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Linkedin, Github } from 'lucide-vue-next'

const year = new Date().getFullYear()
</script>
