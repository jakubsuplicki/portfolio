<template>
  <div
    class="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    ref="projectsContainer"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-20">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-gradient">My Work</span>
        </h1>
        <p class="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light">
          AI-native products, shipped apps, and enterprise platforms
        </p>
      </div>

      <!-- ===================== MY APPS ===================== -->
      <section class="mb-24">
        <div class="flex items-center space-x-4 mb-10">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Smartphone class="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Apps</h2>
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light">
              Solo-built React Native apps — shipped end to end on iOS &amp; Android
            </p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="app in apps"
            :key="app.name"
            class="group flex flex-col bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-[1.03] transition-all duration-500 shadow-2xl"
          >
            <div class="flex items-center justify-between mb-6">
              <img
                :src="app.logo"
                :alt="`${app.name} logo`"
                class="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <span class="text-sm font-medium text-slate-500 dark:text-slate-400">{{ app.year }}</span>
            </div>

            <div class="flex items-center space-x-2 mb-1">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ app.name }}</h3>
              <span
                v-if="app.badge"
                class="px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white"
              >
                {{ app.badge }}
              </span>
            </div>
            <p class="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">{{ app.tagline }}</p>

            <p class="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6 flex-1">
              {{ app.description }}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tool in app.tools"
                :key="tool"
                class="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 rounded-lg text-xs font-medium border border-primary-200 dark:border-primary-700/30"
              >
                {{ tool }}
              </span>
            </div>

            <div class="flex flex-wrap gap-3 mt-auto">
              <a
                v-for="link in app.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${app.name} ${link.text}`"
                :title="`${app.name} ${link.text}`"
                class="inline-flex items-center justify-center rounded-xl transition-all duration-200 text-sm font-medium hover:scale-105 shadow-md"
                :class="isIconOnlyAppLink(link.text)
                  ? 'w-10 h-10 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900'
                  : 'space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white'"
              >
                <svg
                  v-if="link.text === 'App Store'"
                  class="h-5 w-4 flex-shrink-0"
                  viewBox="0 0 384 512"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  />
                </svg>
                <svg
                  v-else-if="link.text === 'Google Play'"
                  class="h-5 w-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    fill="currentColor"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44-3.83 0-6.92-3.09-6.92-6.92s3.09-6.92 6.92-6.92c1.84 0 3.5.7 4.76 1.84l2.1-2.1c-1.86-1.74-4.31-2.81-6.86-2.81-5.26 0-9.5 4.25-9.5 9.5s4.24 9.5 9.5 9.5c5.41 0 9.45-3.86 9.45-9.3 0-.36-.11-.66-.29-.96Z"
                  />
                </svg>
                <component v-else :is="getAppLinkIcon(link.text)" class="w-4 h-4 flex-shrink-0" />
                <span v-if="!isIconOnlyAppLink(link.text)">{{ link.text }}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ============= OPEN-SOURCE & AI ENGINEERING ============= -->
      <section class="mb-24">
        <div class="flex items-center space-x-4 mb-10">
          <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Cpu class="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Open-Source &amp; AI Engineering</h2>
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light">
              Self-directed AI builds — local inference, retrieval, security &amp; developer tooling
            </p>
          </div>
        </div>

        <div class="space-y-10">
          <div
            v-for="project in openSource"
            :key="project.title"
            class="group bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 transition-all duration-500 shadow-2xl"
          >
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
              <div class="flex-1">
                <div class="flex items-center flex-wrap gap-3 mb-2">
                  <h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">{{ project.title }}</h3>
                  <span class="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white">
                    {{ project.year }}
                  </span>
                </div>
                <p class="text-base md:text-lg font-medium text-primary-600 dark:text-primary-400">{{ project.tagline }}</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a
                  v-for="link in project.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`${project.title} ${link.text}`"
                  :title="`${project.title} ${link.text}`"
                  class="inline-flex max-w-full min-w-0 items-center space-x-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl transition-all duration-200 text-sm font-medium hover:scale-105 shadow-md"
                >
                  <component :is="link.text === 'npm' ? Package : Github" class="w-4 h-4 flex-shrink-0" />
                  <span class="truncate">{{ link.text }}</span>
                </a>
              </div>
            </div>

            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-8">
              {{ project.description }}
            </p>

            <div class="grid md:grid-cols-3 gap-8">
              <div class="space-y-4 md:col-span-2">
                <h4 class="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                  <Award class="w-5 h-5 mr-2 text-accent-500 flex-shrink-0" />
                  Highlights
                </h4>
                <div class="space-y-3">
                  <div
                    v-for="highlight in project.highlights"
                    :key="highlight"
                    class="flex items-start space-x-3"
                  >
                    <CheckCircle class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span class="text-slate-700 dark:text-slate-300 leading-relaxed">{{ highlight }}</span>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <h4 class="text-lg font-bold text-slate-900 dark:text-white flex items-center">
                  <Code class="w-5 h-5 mr-2 text-primary-500 flex-shrink-0" />
                  Stack
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tool in project.tools"
                    :key="tool"
                    class="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 rounded-lg text-xs font-medium border border-primary-200 dark:border-primary-700/30"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ============= PROFESSIONAL EXPERIENCE ============= -->
      <section>
        <div class="flex items-center space-x-4 mb-10">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Briefcase class="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Enterprise &amp; Professional Work</h2>
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-light">
              7+ years shipping production systems across enterprise teams
            </p>
          </div>
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
      </section>

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
import { ExternalLink, Briefcase, Code, Award, CheckCircle, ArrowLeft, Smartphone, Cpu, Github, Package, Globe } from 'lucide-vue-next'
import { projects, apps, openSource } from '@/config/projects'
import { useResumeStore } from '@/store/resumeStore'
import type { ResumeSelection } from '@/types/resume'

const projectsContainer = ref<HTMLElement>()

const resumeStore = useResumeStore()

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}

const isIconOnlyAppLink = (text: string): boolean => {
  return text === 'App Store' || text === 'Google Play'
}

const getAppLinkIcon = (text: string) => {
  if (text === 'Website') {
    return Globe
  }
  return ExternalLink
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
