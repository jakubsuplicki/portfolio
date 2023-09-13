<template>
  <header class="header">
    <div class="header__left" @click="changeSelection('landing')">
      <h1>
        <span><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /></span>J. Suplicki
      </h1>
      <p class="header__self-type">
        <span class="header__self-type--word">{{ currentTitle }} </span>
        <span class="header__self-type--line"></span>
      </p>
    </div>
    <div class="header__right">
      <ul class="header__navigation-list">
        <li @click="changeSelection('landing')">Home</li>
        <li @click="changeSelection('about')">About Me</li>
        <li @click="changeSelection('resume')">Resume</li>
        <li @click="changeSelection('projects')">Projects</li>
      </ul>
      <div
        class="menu menu__closed"
        @click="isMobileMenu = !isMobileMenu"
        :class="{ menu__active: isMobileMenu }"
      >
        <div
          class="menu__line menu__top-line"
          :class="{
            'menu__top-line--active': isMobileMenu,
            'menu__line--active': isMobileMenu
          }"
        ></div>
        <div
          class="menu__line menu__mid-line"
          :class="{
            'menu__mid-line--active': isMobileMenu,
            'menu__line--active': isMobileMenu
          }"
        ></div>
        <div
          class="menu__line menu__bot-line"
          :class="{
            'menu__bot-line--active': isMobileMenu,
            'menu__line--active': isMobileMenu
          }"
        ></div>
      </div>
    </div>
    <transition name="fade">
      <the-mobile-menu
        v-if="isMobileMenu"
        :isMobileMenu="isMobileMenu"
        @close="isMobileMenu = !isMobileMenu"
      />
    </transition>
  </header>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
library.add(faLongArrowAltRight)

import { defineComponent } from 'vue'
import TheMobileMenu from '@/components/Navigation/TheMobileMenu.vue'
import { useResumeStore } from '@/store/resumeStore'

export default defineComponent({
  name: 'TheHeader',
  components: {
    TheMobileMenu
  },
  data() {
    return {
      isMobileMenu: false,
      titles: ['Full Stack Developer', 'Tech Geek', 'Cyclist', 'In House Dj'],
      currentTitle: ''
    }
  },
  methods: {
    async typeTitle() {
      const delay = (time: number) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true)
          }, time)
        })
      }
      let titleCounter = 0
      for (const title of this.titles) {
        const letters = title.split('')
        this.currentTitle = ''
        let counter = 0
        //write word
        while (counter !== letters.length) {
          for (const letter of letters) {
            this.currentTitle += letter
            await delay(Math.floor(Math.random() * 100) + 50)
            counter++
          }
        }
        await delay(2000)
        //remove word
        while (this.currentTitle.length !== 0) {
          this.currentTitle = this.currentTitle.substring(0, this.currentTitle.length - 1)
          await delay(30)
        }
        await delay(1500)
        titleCounter++
        //restart method
        if (this.titles.length === titleCounter) {
          this.typeTitle()
        }
      }
    },
    changeSelection(selection: ResumeSelection) {
      const store = useResumeStore()
      store.changeSelection(selection)
    }
  },
  mounted() {
    this.typeTitle()
  }
})
</script>

<style scoped lang="scss">
.header {
  height: 6rem;
  justify-content: space-between;
  padding: 0 1rem;
  @include respond(tab-land) {
    padding: 0;
  }
  &__left {
    display: flex;
    align-items: center;
    cursor: pointer;
    h1 {
      display: flex;
      align-items: center;
      color: $color-light;
      margin-right: 0.5rem;
      span {
        content: '';
        display: block;
        border-radius: $radius-main;
        color: $color-main-light;
        margin-right: 1rem;
        font-size: 1.6rem;
      }
    }
  }
  &__self-type {
    display: flex;
    font-size: 1.6rem;
    color: $color-main-light;
    &--line {
      margin-left: 0.1rem;
      display: block;
      position: relative;
      width: 0.5rem;
      height: 1.6rem;
      background-color: $color-light;
      animation: blink 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    }
    @keyframes blink {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  &__navigation-list {
    display: none;
    @include respond(tab-land) {
      display: flex;
      list-style: none;
      li {
        margin: 0 1rem;
        cursor: pointer;
      }
    }
  }
  .menu {
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    z-index: 101;
    &__line {
      position: relative;
      display: block;
      width: 3rem;
      height: 0.4rem;
      background-color: $color-light;
      margin: 10% auto;
      border-radius: $radius-main;
      transition: all 0.2s ease-in-out;
      &--active {
        margin: 0;
      }
    }
    &__top-line {
      &--active {
        transform: rotate(45deg);
        transition-delay: 0.2s;
        top: 0.4rem;
      }
    }
    &__mid-line {
      animation: bump 1s;
      &--active {
        width: 0rem;
        animation: shrink 0.2s;
      }
    }
    &__bot-line {
      &--active {
        transform: rotate(-45deg);
        transition-delay: 0.2s;
        top: -0.4rem;
      }
    }
    @keyframes shrink {
      0% {
        left: 0rem;
        width: 3rem;
      }
      30% {
        left: 0.5rem;
        width: 2rem;
      }
      60% {
        left: 1rem;
        width: 1rem;
      }
      100% {
        left: 1.5rem;
        width: 0;
      }
    }
    @keyframes bump {
      0% {
        transform: scale(0.3);
      }
      30% {
        transform: scale(1.2);
      }
      60% {
        transform: scale(0.9);
      }
      100% {
        transform: scale(1);
      }
    }
    @include respond(tab-land) {
      display: none;
    }
  }
}

// animate mobile menu

.mobile_menu_activate-enter-active,
.mobile_menu_activate-leave-active {
  transition: opacity 0.4s ease;
}

.mobile_menu_activate-enter-from,
.mobile_menu_activate-leave-to {
  opacity: 0;
}
</style>
