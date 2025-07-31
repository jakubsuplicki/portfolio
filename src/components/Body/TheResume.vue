<template>
  <div 
    class="min-h-screen py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
    ref="resumeContainer"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 class="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
          <span class="text-gradient">My Resume</span>
        </h1>
        <p class="text-lg sm:text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light px-4">
          My professional journey and achievements
        </p>
      </div>

      <!-- Resume Content -->
      <div class="space-y-12 sm:space-y-16 lg:space-y-20">
        <!-- Professional Experience -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Briefcase class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
          </div>
          <TheResumeSection
            title=""
            icon="briefcase"
            :items="professionalExperience"
          />
        </section>

        <!-- Education -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Education</h2>
          </div>
          <TheResumeSection
            title=""
            icon="graduation-cap"
            :items="education"
          />
        </section>

        <!-- University Projects -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Code class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">University Projects</h2>
          </div>
          <TheResumeSection
            title=""
            icon="code"
            :items="universityProjects"
          />
        </section>

        <!-- Technical Skills -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Code class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div
              v-for="skillCategory in resumeSkills"
              :key="skillCategory.title"
              class="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div class="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <component :is="getSkillIcon(skillCategory.title)" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{{ skillCategory.title }}</h3>
              </div>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span
                  v-for="skill in skillCategory.skills"
                  :key="skill"
                  class="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 rounded-lg text-xs sm:text-sm font-medium border border-primary-200 dark:border-primary-700/30 hover:scale-105 transition-transform duration-200"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Personal Attributes -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <User class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Personal Attributes</h2>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div
              v-for="attribute in personalAttributes"
              :key="attribute.title"
              class="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-105 transition-all duration-300 shadow-xl text-center"
            >
              <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <component :is="getAttributeIcon(attribute.title)" class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 class="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{{ attribute.title }}</h3>
            </div>
          </div>
        </section>

        <!-- Completed Courses -->
        <section>
          <div class="flex items-center space-x-3 sm:space-x-4 mb-8 sm:mb-12">
            <div class="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BookOpen class="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Completed Courses</h2>
          </div>

          <div class="bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 dark:border-slate-700/20 shadow-xl">
            <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div
                v-for="course in completedCourses"
                :key="course"
                class="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/10 dark:bg-slate-800/20 rounded-xl border border-white/20 dark:border-slate-700/20"
              >
                <CheckCircle class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span class="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">{{ course }}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-12 sm:mt-16 lg:mt-20">
        <button
          @click="changeSelection('landing')"
          class="btn-secondary flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          <ArrowLeft class="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Code, User, BookOpen, CheckCircle, Database, Settings, Layers, Zap, Clock, Eye, Sparkles, Timer, Briefcase, GraduationCap, ArrowLeft } from 'lucide-vue-next'
import TheResumeSection from './TheResumeSection.vue'
import { useResumeStore } from '@/store/resumeStore'
import type { ResumeSelection } from '@/types/resume'
import { 
  resumeSkills, 
  professionalExperience, 
  education, 
  universityProjects, 
  personalAttributes, 
  completedCourses 
} from '@/config/resume'

const resumeContainer = ref<HTMLElement>()

const resumeStore = useResumeStore()

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}

const getSkillIcon = (skillTitle: string) => {
  const iconMap: Record<string, any> = {
    'Languages': Code,
    'Frontend': Code,
    'Backend': Code,
    'Database Systems': Database,
    'Development Tools': Settings,
    'Testing': CheckCircle,
    'Development Skills': Layers,
    'Visual Modelling': Layers,
    'Operating Systems': Settings,
  }
  return iconMap[skillTitle] || Code
}

const getAttributeIcon = (attributeTitle: string) => {
  const iconMap: Record<string, any> = {
    'Time Management': Clock,
    'Eye for Detail': Eye,
    'Self-motivated': Sparkles,
    'Punctuality': Timer,
  }
  return iconMap[attributeTitle] || Zap
}

onMounted(() => {
  if (resumeContainer.value) {
    const element = resumeContainer.value
    element.style.opacity = '0'
    
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s ease-in-out'
      element.style.opacity = '1'
    }, 50)
  }
})
</script>
