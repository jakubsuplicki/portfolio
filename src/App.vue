<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
    <!-- Background Pattern -->
    <div class="fixed inset-0 opacity-40">
      <div class="absolute inset-0" style="background-image: url('data:image/svg+xml;utf8,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/></g></g></svg>')"></div>
    </div>
    
    <!-- Navigation Header -->
    <header class="relative z-50">
      <TheHeader />
    </header>
    
    <!-- Main Content -->
    <main class="relative z-10 flex-1">
      <!-- Animated Background Elements -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-primary-500/10 dark:bg-primary-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-accent-500/10 dark:bg-accent-400/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 dark:bg-blue-400/3 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s;"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10">
        <router-view v-slot="{ Component }">
          <transition
            name="page"
            mode="out-in"
            @enter="onEnter"
            @leave="onLeave"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    
    <!-- Footer -->
    <footer class="relative z-50">
      <TheFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import TheHeader from '@/components/Navigation/TheHeader.vue'
import TheFooter from '@/components/Navigation/TheFooter.vue'
import { useThemeStore } from './store/themeStore'
const themeStore = useThemeStore()

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.opacity = '0'
  element.style.transform = 'translateY(20px)'
  
  setTimeout(() => {
    element.style.transition = 'all 0.5s ease-out'
    element.style.opacity = '1'
    element.style.transform = 'translateY(0)'
  }, 50)
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transition = 'all 0.3s ease-in'
  element.style.opacity = '0'
  element.style.transform = 'translateY(-20px)'
}

onMounted(() => {
  themeStore.initTheme()
})
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
