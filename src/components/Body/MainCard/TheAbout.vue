<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-20">
        <button
          @click="changeSelection('landing')"
          class="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 mb-8"
        >
          <ArrowLeft class="w-5 h-5" />
          <span>Back to Home</span>
        </button>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          <span class="text-gradient">About Me</span>
        </h1>
        <p class="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 font-light">
          {{ yearsOfExperience }}+ years of crafting digital experiences
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Text Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              Driven by a relentless thirst for knowledge and a knack for self-initiation, I take pride in untangling complex technical knots with my extensive understanding and keen problem-solving skills.
            </p>
            
            <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              Professional experience of over <strong class="text-primary-500">{{ yearsOfExperience }} years</strong> in the complete software development life cycle, building applications from scratch and skillfully managing multiple projects across a diverse spectrum of difficulty.
            </p>
            
            <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              I place a strong emphasis on collaboration, engaging with stakeholders across all business tiers, and leveraging our collective insights to bring transformative solutions to intricate business processes and projects.
            </p>
          </div>

          <!-- Core Strengths -->
          <div class="space-y-6">
            <h3 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Core Strengths</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="skill in coreSkills"
                :key="skill.name"
                class="flex items-center space-x-4 p-6 bg-white/10 dark:bg-slate-800/20 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-105 transition-all duration-300"
              >
                <component :is="skill.icon" class="w-8 h-8 text-primary-500 flex-shrink-0" />
                <span class="font-medium text-lg text-slate-700 dark:text-slate-300">{{ skill.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="space-y-8">
          <!-- Profile Image -->
          <div class="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6 opacity-20"></div>
            <img
              src="/src/assets/images/profile_pic.jpeg"
              alt="Profile Picture"
              class="relative w-full h-full rounded-3xl object-cover shadow-2xl border-4 border-white/20 dark:border-slate-700/20"
            />
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div class="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-white/10 dark:bg-slate-800/20 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
              <div class="text-3xl sm:text-4xl font-bold text-primary-500">{{ yearsOfExperience }}+</div>
              <div class="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Years Experience</div>
            </div>
            <div class="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-white/10 dark:bg-slate-800/20 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
              <div class="text-3xl sm:text-4xl font-bold text-primary-500">10+</div>
              <div class="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Projects Completed</div>
            </div>
            <div class="space-y-2 sm:space-y-3 p-4 sm:p-6 bg-white/10 dark:bg-slate-800/20 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
              <div class="text-3xl sm:text-4xl font-bold text-primary-500">50+</div>
              <div class="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Philosophy Section -->
      <div class="text-center mb-20">
        <div class="max-w-4xl mx-auto space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">My Philosophy</h2>
          <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            I believe in creating technology that serves people, not the other way around. 
            Every line of code should have purpose, every design decision should enhance the user experience, 
            and every project should make a meaningful impact.
          </p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          @click="changeSelection('resume')"
          class="btn-primary flex items-center space-x-3 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
        >
          <FileText class="w-6 h-6" />
          <span>View My Resume</span>
        </button>
        
        <button
          @click="changeSelection('projects')"
          class="btn-secondary flex items-center space-x-3 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
        >
          <Briefcase class="w-6 h-6" />
          <span>See My Projects</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrowLeft, FileText, Briefcase, Code, Users, Zap, Target } from 'lucide-vue-next'
import { useResumeStore } from '@/store/resumeStore'
import type { ResumeSelection } from '@/types/resume'

const resumeStore = useResumeStore()

const yearsOfExperience = computed(() => new Date().getFullYear() - 2018)

const coreSkills = [
  { name: 'Full Stack Development', icon: Code },
  { name: 'Team Leadership', icon: Users },
  { name: 'Problem Solving', icon: Zap },
  { name: 'Project Management', icon: Target }
]

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}
</script>
