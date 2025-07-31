<template>
  <div class="min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    <!-- Hero Content -->
    <div class="text-center space-y-8 sm:space-y-12 max-w-5xl mx-auto">
      <!-- Profile Image -->
      <div class="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 mb-8 sm:mb-12 floating-animation">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse opacity-75"></div>
        <img
          src="/src/assets/images/profile_pic.jpeg"
          alt="Profile Picture"
          class="relative w-full h-full rounded-full object-cover border-4 border-white/30 dark:border-slate-700/30 shadow-2xl"
        />
        <div class="absolute -bottom-3 -right-3 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
          <div class="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <!-- Main Heading -->
      <div class="space-y-4 sm:space-y-6">
        <div class="space-y-2">
          <p class="text-sm sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium tracking-wide uppercase">
            Welcome to my portfolio
          </p>
          <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span class="text-gradient block">Hello, I'm</span>
            <span class="text-slate-900 dark:text-white block mt-1 sm:mt-2">Jakub Suplicki</span>
          </h1>
        </div>
        
        <div class="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
          <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4">
            <span class="inline-block">Software Engineer</span>
            <span class="hidden sm:block w-2 h-2 bg-primary-500 rounded-full"></span>
            <span class="inline-block">Technical Lead</span>
            <span class="hidden sm:block w-2 h-2 bg-primary-500 rounded-full"></span>
            <span class="inline-block">Founder & Developer</span>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
        Passionate about creating innovative solutions with modern technologies. 
        I build scalable applications that make a difference in people's lives.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
        <button
          @click="changeSelection('about')"
          class="btn-primary flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 glow-effect transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          <User class="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Learn More About Me</span>
        </button>
        
        <button
          @click="changeSelection('projects')"
          class="btn-secondary flex items-center space-x-2 sm:space-x-3 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
        >
          <Briefcase class="w-5 h-5 sm:w-6 sm:h-6" />
          <span>View My Work</span>
        </button>
      </div>
    </div>

    <!-- Tech Stack Section -->
    <div class="mt-12 sm:mt-16 w-full max-w-6xl px-4">
      <div class="text-center space-y-4 sm:space-y-6">
        <p class="text-slate-500 dark:text-slate-400 text-base sm:text-lg font-medium">Technologies I work with</p>
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4">
          <span
            v-for="tech in techStack"
            :key="tech"
            class="px-3 sm:px-6 py-2 sm:py-3 bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 hover:scale-105 transition-all duration-300 cursor-default"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, Briefcase } from 'lucide-vue-next'
import { useResumeStore } from '@/store/resumeStore'
import type { ResumeSelection } from '@/types/resume'

const resumeStore = useResumeStore()

const techStack = [
  'Vue.js', 'React', 'React Native', 'TypeScript', 'Node.js', 'Firebase', 'PostgreSQL', 'AWS'
]

const changeSelection = (selection: string) => {
  resumeStore.changeSelection(selection as ResumeSelection)
}
</script>
