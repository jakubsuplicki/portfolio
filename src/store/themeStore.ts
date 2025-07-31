import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)
  
  const theme = computed(() => isDark.value ? 'dark' : 'light')
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    updateDocumentClass()
  }
  
  const setTheme = (newTheme: 'light' | 'dark') => {
    isDark.value = newTheme === 'dark'
    updateDocumentClass()
  }
  
  const updateDocumentClass = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  }
  
  const saveTheme = () => {
    localStorage.setItem('theme', theme.value)
  }
  
  return {
    isDark,
    theme,
    toggleTheme,
    setTheme,
    initTheme,
    saveTheme
  }
})
