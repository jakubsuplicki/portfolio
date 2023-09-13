import { defineStore } from 'pinia'

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
