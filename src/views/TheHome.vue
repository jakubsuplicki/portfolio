<template>
  <div class="min-h-screen">
    <transition
      name="fade"
      mode="out-in"
      @enter="onEnter"
      @leave="onLeave"
    >
      <!-- Landing/About Section -->
      <div
        v-if="getSelection === 'about' || getSelection === 'landing'"
        key="main"
        class="w-full"
      >
        <TheMain />
      </div>

      <!-- Resume Section -->
      <div
        v-else-if="getSelection === 'resume'"
        key="resume"
        class="w-full min-h-screen"
      >
        <TheResume />
      </div>

      <!-- Projects Section -->
      <div
        v-else-if="getSelection === 'projects'"
        key="projects"
        class="w-full min-h-screen"
      >
        <TheProjects />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TheMain from '@/components/Body/TheMain.vue'
import TheProjects from '@/components/Body/TheProjects.vue'
import TheResume from '@/components/Body/TheResume.vue'
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
.fade-enter-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
