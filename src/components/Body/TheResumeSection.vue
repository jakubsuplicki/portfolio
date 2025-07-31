<template>
  <div class="space-y-4 sm:space-y-6">
    <!-- Items -->
    <div class="space-y-4 sm:space-y-6">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative"
      >
        <!-- Timeline Line -->
        <div
          v-if="index < items.length - 1"
          class="absolute left-5 sm:left-6 top-12 sm:top-16 w-0.5 h-12 sm:h-16 bg-gradient-to-b from-primary-500 to-primary-300 opacity-30"
        ></div>

        <!-- Resume Item -->
        <TheResumeItem :item="item">
          <template v-if="item.skills" #skills>
            <div class="space-y-2 sm:space-y-3">
              <h4 class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                Key Technologies
              </h4>
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  v-for="skill in item.skills"
                  :key="skill"
                  class="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-800 dark:text-primary-200 rounded-full text-xs sm:text-sm font-medium border border-primary-200 dark:border-primary-700/30"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </template>
        </TheResumeItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheResumeItem from './TheResumeItem.vue'

interface ResumeItem {
  title: string
  location?: string
  date?: string
  icon?: string[] | string
  skills?: string[]
}

defineProps<{
  title: string
  icon: string
  items: ResumeItem[]
}>()
</script>
