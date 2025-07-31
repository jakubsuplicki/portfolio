<template>
  <div 
    class="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    ref="projectsContainer"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-gradient">My Projects</span>
        </h1>
        <p class="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light">
          A showcase of my professional work and achievements
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-16">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group"
        >
          <!-- Project Card -->
          <div class="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <!-- Project Header -->
            <div class="flex flex-col lg:flex-row items-start justify-between mb-8">
              <div class="flex-1 mb-6 lg:mb-0">
                <div class="flex items-center space-x-3 sm:space-x-4 mb-4">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Briefcase class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <h2 class="text-lg sm:text-xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                      {{ project.title }}
                    </h2>
                  </div>
                </div>
                <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {{ project.description }}
                </p>
              </div>
            </div>

            <!-- Content Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <!-- Technologies -->
              <div class="space-y-4">
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center">
                  <Code class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary-500 flex-shrink-0" />
                  Technologies
                </h3>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="tool in getProjectTools(project)"
                    :key="tool"
                    class="px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 rounded-xl text-sm font-medium border border-primary-200 dark:border-primary-700/30 hover:scale-105 transition-transform duration-200"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>

              <!-- Achievements -->
              <div v-if="getProjectAchievements(project).length > 0" class="space-y-4 md:col-span-2 lg:col-span-2">
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center">
                  <Award class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-accent-500 flex-shrink-0" />
                  Key Achievements
                </h3>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div
                    v-for="achievement in getProjectAchievements(project)"
                    :key="achievement"
                    class="flex items-start space-x-3 p-4 bg-white/10 dark:bg-slate-800/20 rounded-xl border border-white/20 dark:border-slate-700/20"
                  >
                    <CheckCircle class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span class="text-slate-700 dark:text-slate-300 leading-relaxed">{{ achievement }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Links -->
            <div v-if="getProjectLinks(project).length > 0" class="mt-8 pt-8 border-t border-white/10 dark:border-slate-700/20">
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center mb-4">
                <ExternalLink class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                Project Links
              </h3>
              <div class="flex flex-wrap gap-4">
                <a
                  v-for="link in getProjectLinks(project)"
                  :key="link.url || link.href"
                  :href="link.url || link.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center space-x-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-200 font-medium hover:scale-105 shadow-lg"
                >
                  <ExternalLink class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>{{ link.text }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Home Button -->
      <div class="text-center mt-20">
        <button
          @click="changeSelection('landing')"
          class="btn-secondary flex items-center space-x-3 text-lg px-8 py-4 mx-auto transform hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft class="w-6 h-6" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ExternalLink, Briefcase, Code, Award, CheckCircle, ArrowLeft } from 'lucide-vue-next'
import { projects } from '@/config/projects'
import { useResumeStore } from '@/store/resumeStore'

const projectsContainer = ref<HTMLElement>()

const resumeStore = useResumeStore()

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}

const getProjectTools = (project: any): string[] => {
  if (Array.isArray(project.tools)) {
    return project.tools
  }
  if (project.tools && project.tools.stack) {
    return project.tools.stack
  }
  return []
}

const getProjectAchievements = (project: any): string[] => {
  if (Array.isArray(project.achievements)) {
    return project.achievements
  }
  if (project.achievements && project.achievements.content) {
    return project.achievements.content
  }
  return []
}

const getProjectLinks = (project: any): Array<{url?: string, href?: string, text: string}> => {
  if (Array.isArray(project.links)) {
    return project.links
  }
  if (project.links && project.links.urls) {
    return project.links.urls
  }
  return []
}

onMounted(() => {
  if (projectsContainer.value) {
    const element = projectsContainer.value
    element.style.opacity = '0'
    
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s ease-in-out'
      element.style.opacity = '1'
    }, 50)
  }
})
</script>
