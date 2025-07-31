<template>
  <div class="w-full min-h-screen">
    <transition
      name="flip"
      mode="out-in"
      @enter="onEnter"
      @leave="onLeave"
    >
      <TheLanding v-if="getSelection === 'landing'" key="landing" />
      <TheAbout v-else-if="getSelection === 'about'" key="about" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TheLanding from './MainCard/TheLanding.vue'
import TheAbout from './MainCard/TheAbout.vue'
import { useResumeStore } from '@/store/resumeStore'

const resumeStore = useResumeStore()

const getSelection = computed(() => resumeStore.getSelection)

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.opacity = '0'
  
  setTimeout(() => {
    element.style.transition = 'opacity 0.5s ease-in-out'
    element.style.opacity = '1'
  }, 50)
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.transition = 'opacity 0.3s ease-in-out'
  element.style.opacity = '0'
}
</script>

<style scoped>
.flip-enter-active {
  transition: opacity 0.5s ease-in-out;
}

.flip-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.flip-enter-from,
.flip-leave-to {
  opacity: 0;
}
</style>
