<template>
  <div class="flip">
    <div
      :class="{
        'flip__each--rotate-front': getSelection === 'about'
      }"
      class="flip__each flip__each--front"
      key="landing"
    >
      <the-landing
        :class="{
          'flip__each--content-flip': getSelection === 'about'
        }"
        class="flip__each--content"
      />
      <the-contact />
    </div>
    <div
      :class="{
        'flip__each--rotate-back': getSelection === 'about'
      }"
      class="flip__each flip__each--back"
      key="about"
    >
      <the-about
        :class="{
          'flip__each--content-flip': getSelection === 'landing'
        }"
        class="flip__each--content"
      />
      <the-contact class="flip__contact-about" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheLanding from '@/components/Body/MainCard/TheLanding.vue'
import TheAbout from '@/components/Body/MainCard/TheAbout.vue'
import TheContact from '@/components/Utils/TheContact.vue'
import { useResumeStore } from '@/store/resumeStore'

export default defineComponent({
  name: 'TheMain',
  components: {
    TheLanding,
    TheAbout,
    TheContact
  },
  computed: {
    getSelection() {
      const store = useResumeStore()
      return store.getSelection
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}
.flip {
  position: relative;
  width: 90vw;
  height: 48rem;
  padding-bottom: 2rem;
  transform: perspective(1000px) rotateY(0deg);
  margin: 2rem 0;
  transform-style: preserve-3d;
  z-index: 1;
  @include respond(tab-port) {
    position: relative;
    display: flex;
    justify-content: center;
  }
  &__each {
    border-radius: $radius-main;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $color-secondary;
    opacity: 0.9;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    z-index: 1;
    &--front,
    &--back {
      transition: transform 0.6s cubic-bezier(0.5, 0.3, 0.3, 1);
      backface-visibility: hidden;
      overflow: hidden;
      position: absolute;
      top: 0;
      @include respond(tab-port) {
        position: relative;
        max-width: 30rem;
      }
    }
    &--front {
      transform: rotateY(0deg);
      z-index: 1;
      @include respond(tab-port) {
        transform: rotateY(10deg);
      }
    }
    &--back {
      transform: rotateY(180deg);
      z-index: 1;
      @include respond(tab-port) {
        transform: rotateY(-10deg);
      }
    }
    &--rotate-front {
      transform: rotateY(-180deg);
    }
    &--rotate-back {
      transform: rotateY(0deg);
    }
    &--content {
      position: relative;
      transition: transform 0.6s cubic-bezier(0.5, 0.4, 0.4, 1);
      transform: translateX(0rem) scale(1);
      z-index: 2;
    }
    &--content-flip {
      transform: translateX(-20rem) scale(0.85);
      @include respond(tab-port) {
        transform: none;
      }
    }
  }
  &__contact-about {
    @include respond(tab-port) {
      display: none;
    }
  }
}
</style>
