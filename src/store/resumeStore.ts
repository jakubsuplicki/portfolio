import { defineStore } from 'pinia'
import type { ResumeSelection } from '@/types/resume'

export const useResumeStore = defineStore('resume', {
  state: () => ({
    selected: 'landing' as ResumeSelection
  }),
  getters: {
    getSelection(state) {
      return state.selected
    }
  },
  actions: {
    changeSelection(payload: ResumeSelection) {
      return (this.selected = payload)
    }
  }
})
