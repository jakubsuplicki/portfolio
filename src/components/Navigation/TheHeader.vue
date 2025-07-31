<template>
  <nav class="glass-card mx-2 sm:mx-4 mt-2 sm:mt-4">
    <div class="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
      <div class="flex items-center">
        <button
          @click="toggleTheme"
          class="md:hidden p-3 rounded-lg bg-white/30 dark:bg-slate-800/40 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 hover:bg-white/40 dark:hover:bg-slate-700/50 transition-all duration-200 shadow-sm"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>
      </div>

      <!-- Center: Navigation Menu (desktop only) -->
      <div class="hidden md:flex items-center space-x-1">
        <button
          v-for="item in navigationItems"
          :key="item.key"
          @click="changeSelection(item.key)"
          :class="[
            'px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm lg:text-base flex items-center',
            getSelection === item.key
              ? 'bg-primary-500 text-white shadow-lg'
              : 'text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20'
          ]"
        >
          <component :is="item.icon" class="w-4 h-4 mr-1 lg:mr-2" />
          {{ item.label }}
        </button>
      </div>

      <!-- Right side: Theme Toggle (desktop) & Mobile Menu -->
      <div class="flex items-center space-x-2 sm:space-x-3">
        <!-- Theme Toggle - visible on desktop only -->
        <button
          @click="toggleTheme"
          class="hidden md:block p-2 sm:p-2.5 rounded-lg bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/20 transition-all duration-200"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" class="w-4 h-4 sm:w-5 sm:h-5" />
          <Moon v-else class="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-3 rounded-lg bg-white/30 dark:bg-slate-800/40 backdrop-blur-sm border border-white/40 dark:border-slate-600/40 hover:bg-white/40 dark:hover:bg-slate-700/50 transition-all duration-200 shadow-sm"
        >
          <Menu 
            v-if="!showMobileMenu"
            class="w-5 h-5 transition-transform duration-200" 
          />
          <X 
            v-else
            class="w-5 h-5 transition-transform duration-200" 
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div
        v-if="showMobileMenu"
        class="md:hidden border-t border-white/20 dark:border-slate-700/20 px-4 sm:px-6 py-3 sm:py-4 space-y-2 overflow-hidden"
      >
        <button
          v-for="(item, index) in navigationItems"
          :key="item.key"
          @click="changeSelection(item.key); showMobileMenu = false"
          :class="[
            'w-full text-left px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all duration-200 flex items-center text-sm sm:text-base transform mobile-menu-item',
            getSelection === item.key
              ? 'bg-primary-500 text-white shadow-lg'
              : 'text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20'
          ]"
          :data-index="index"
        >
          <component :is="item.icon" class="w-4 h-4 mr-2 sm:mr-3" />
          {{ item.label }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { User, Home, FileText, Briefcase, Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useResumeStore } from '@/store/resumeStore'
import { useThemeStore } from '@/store/themeStore'

const resumeStore = useResumeStore()
const themeStore = useThemeStore()

const showMobileMenu = ref(false)

const getSelection = computed(() => resumeStore.getSelection)
const isDark = computed(() => themeStore.isDark)

const navigationItems = [
  { key: 'landing', label: 'Home', icon: Home },
  { key: 'about', label: 'About', icon: User },
  { key: 'resume', label: 'Resume', icon: FileText },
  { key: 'projects', label: 'Projects', icon: Briefcase },
]

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}

const toggleTheme = () => {
  themeStore.toggleTheme()
  themeStore.saveTheme()
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped>
.mobile-menu-item {
  animation: slideInFromRight 0.3s ease-out forwards;
}

.mobile-menu-item[data-index="0"] {
  animation-delay: 0ms;
}

.mobile-menu-item[data-index="1"] {
  animation-delay: 50ms;
}

.mobile-menu-item[data-index="2"] {
  animation-delay: 100ms;
}

.mobile-menu-item[data-index="3"] {
  animation-delay: 150ms;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
