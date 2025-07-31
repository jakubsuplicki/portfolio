<template>
  <div class="glass-card card-hover space-y-3 sm:space-y-4">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-3 sm:space-y-0">
      <div class="flex items-start space-x-3 sm:space-x-4 flex-1">
        <!-- Icon -->
        <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <component :is="getIcon(item.icon)" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        
        <!-- Title and Location -->
        <div class="flex-1 min-w-0">
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
            {{ item.title }}
          </h3>
          <p v-if="item.location" class="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
            {{ item.location }}
          </p>
        </div>
      </div>
      
      <!-- Date -->
      <div v-if="item.date" class="flex justify-start sm:justify-end">
        <span class="inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
          <Calendar class="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
          {{ item.date }}
        </span>
      </div>
    </div>

    <!-- Skills Slot -->
    <div v-if="$slots.skills" class="pt-3 sm:pt-4 border-t border-white/10 dark:border-slate-700/20">
      <slot name="skills"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Briefcase, GraduationCap, Award, Code, User } from 'lucide-vue-next'

interface ResumeItem {
  title: string
  location?: string
  date?: string
  icon?: string[] | string
}

defineProps<{
  item: ResumeItem
}>()

const getIcon = (iconName?: string[] | string) => {
  const iconString = Array.isArray(iconName) ? iconName[1] : iconName
  
  const iconMap: Record<string, any> = {
    'briefcase': Briefcase,
    'graduation-cap': GraduationCap,
    'user-graduate': GraduationCap,
    'award': Award,
    'code': Code,
    'keyboard': Code,
    'laptop-medical': Code,
    'user': User,
  }
  
  return iconMap[iconString || 'briefcase'] || Briefcase
}
</script>
