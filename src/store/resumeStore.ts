import { defineStore } from 'pinia'

export const useResumeStore = defineStore('resume', {
  state: () => ({
    selected: 'landing'
  }),
  getters: {
    getSelection(state) {
      return state.selected
    }
  },
  actions: {
    changeSelection(payload: string) {
      return (this.selected = payload)
    }
  }
})
