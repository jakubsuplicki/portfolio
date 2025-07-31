<template>
  <div class="glass-card mx-2 sm:mx-4 mb-2 sm:mb-4">
    <div class="flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 px-4 sm:px-6 space-y-3 sm:space-y-0">
      <!-- Copyright -->
      <div class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
        © {{ currentYear }} Portfolio
      </div>

      <!-- Social Links -->
      <div class="flex items-center space-x-3 sm:space-x-4">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all duration-200 hover:scale-110"
          :title="social.name"
        >
          <component :is="social.icon" class="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/jakubsuplicki',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jakub-suplicki/',
    icon: Linkedin
  },

]


</script>
