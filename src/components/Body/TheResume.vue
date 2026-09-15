<template>
  <div ref="resumeContainer" class="min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="mb-12 text-center sm:mb-16 lg:mb-20">
        <h1 class="mb-4 text-3xl font-bold sm:text-5xl md:text-7xl">
          <span class="text-gradient">Experience &amp; Expertise</span>
        </h1>
        <p
          class="px-4 text-lg font-light text-slate-600 dark:text-slate-300 sm:text-2xl md:text-3xl"
        >
          Senior Software Engineer · Applied AI &amp; Full-Stack Systems
        </p>
      </div>

      <div class="space-y-12 sm:space-y-16 lg:space-y-20">
        <section>
          <SectionHeading
            title="Professional Experience"
            :icon="Briefcase"
            gradient="from-primary-500 to-primary-600"
          />
          <TheResumeSection title="" icon="briefcase" :items="professionalExperience" />
        </section>

        <section>
          <SectionHeading
            title="Independent Product Engineering"
            :icon="Rocket"
            gradient="from-accent-500 to-primary-500"
          />
          <TheResumeSection title="" icon="briefcase" :items="independentProductEngineering" />
        </section>

        <section>
          <SectionHeading
            title="Technical Focus"
            :icon="Code"
            gradient="from-green-500 to-green-600"
          />
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            <div
              v-for="skillCategory in resumeSkills"
              :key="skillCategory.title"
              class="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 dark:border-slate-700/20 dark:bg-slate-800/20 dark:hover:bg-slate-800/30 sm:p-6"
            >
              <div class="mb-5 flex items-center space-x-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600"
                >
                  <component :is="getSkillIcon(skillCategory.title)" class="h-5 w-5 text-white" />
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white">
                  {{ skillCategory.title }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in skillCategory.skills"
                  :key="skill"
                  class="rounded-lg border border-primary-200 bg-gradient-to-r from-primary-100 to-accent-100 px-3 py-1.5 text-xs font-medium text-primary-800 dark:border-primary-700/30 dark:from-primary-900/30 dark:to-accent-900/30 dark:text-primary-200"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Education"
            :icon="GraduationCap"
            gradient="from-blue-500 to-blue-600"
          />
          <TheResumeSection title="" icon="graduation-cap" :items="education" />
        </section>

        <section>
          <SectionHeading
            title="Languages"
            :icon="Languages"
            gradient="from-purple-500 to-purple-600"
          />
          <div
            class="flex flex-wrap gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-sm dark:border-slate-700/20 dark:bg-slate-800/20"
          >
            <span
              v-for="language in spokenLanguages"
              :key="language"
              class="rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-3 font-semibold text-white shadow-md"
            >
              {{ language }} · Native / bilingual
            </span>
          </div>
        </section>
      </div>

      <div class="mt-12 flex justify-center sm:mt-16 lg:mt-20">
        <button
          class="btn-secondary flex w-full items-center justify-center space-x-3 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 sm:w-auto"
          @click="changeSelection('landing')"
        >
          <ArrowLeft class="h-6 w-6" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted, ref, type Component } from 'vue'
import {
  ArrowLeft,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  GraduationCap,
  Languages,
  Rocket,
  Workflow
} from 'lucide-vue-next'
import TheResumeSection from './TheResumeSection.vue'
import { useResumeStore } from '@/store/resumeStore'
import type { ResumeSelection } from '@/types/resume'
import {
  education,
  independentProductEngineering,
  professionalExperience,
  resumeSkills,
  spokenLanguages
} from '@/config/resume'

const resumeContainer = ref<HTMLElement>()
const resumeStore = useResumeStore()

const SectionHeading = (props: { title: string; icon: Component; gradient: string }) =>
  h('div', { class: 'mb-8 flex items-center space-x-3 sm:mb-12 sm:space-x-4' }, [
    h(
      'div',
      {
        class: `flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${props.gradient} shadow-lg sm:h-16 sm:w-16`
      },
      [h(props.icon, { class: 'h-6 w-6 text-white sm:h-8 sm:w-8' })]
    ),
    h(
      'h2',
      { class: 'text-2xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl' },
      props.title
    )
  ])

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}

const getSkillIcon = (skillTitle: string) => {
  const iconMap: Record<string, Component> = {
    'Full Stack': Code,
    'AI Systems': Cpu,
    'Cloud & Data': Cloud,
    Delivery: Workflow
  }
  return iconMap[skillTitle] || Code
}

onMounted(() => {
  if (!resumeContainer.value) return

  const element = resumeContainer.value
  element.style.opacity = '0'
  setTimeout(() => {
    element.style.transition = 'opacity 0.5s ease-in-out'
    element.style.opacity = '1'
  }, 50)
})
</script>
