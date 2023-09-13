<template>
  <div class="landing">
    <span @click="$store.commit('changeSelection', 'about')" class="landing__about"
      ><font-awesome-icon :icon="['far', 'user-circle']"
    /></span>
    <div class="landing__image">
      <img src="@/assets/images/profile_pic.jpg" alt="profile picture" />
    </div>
    <div class="landing__name">
      <h1>
        <p>Jakub</p>
        <p>Suplicki</p>
      </h1>
    </div>
    <span class="landing__divider"></span>
    <div class="landing__buttons">
      <button @click="$store.commit('changeSelection', 'resume')">RESUME</button>
      <button @click="$store.commit('changeSelection', 'projects')">PROJECTS</button>
    </div>
  </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
library.add(faUserCircle)

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheLanding'
})
</script>

<style scoped lang="scss">
.landing {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  &__about {
    position: absolute;
    font-size: 3rem;
    top: 1rem;
    right: 1rem;
    @include respond(tab-port) {
      display: none;
    }
  }
  &__image {
    margin-top: 7rem;
    opacity: 0.9;
    img {
      border-radius: 100%;
      width: 15rem;
      height: 15rem;
    }
    @include respond(tab-port) {
      margin-top: 5rem;
    }
  }
  &__name {
    display: flex;
    flex-direction: column;
    text-align: center;
    h1 {
      color: $color-light;
      font-size: 2rem;
      letter-spacing: 0.2rem;
      font-weight: 400;
    }
    p {
      margin: 1rem 0;
    }
  }
  &__divider {
    height: 0.3rem;
    width: 10rem;
    background-color: $color-main;
    border-radius: $radius-main;
    margin: 1rem 0;
  }
  &__buttons {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0;
    width: 85%;
    button {
      padding: $btn-padding;
      border-radius: $radius-main-round;
      color: $color-light;
      font-size: 1.4rem;
      width: 12rem;
      text-align: center;
      &:nth-child(1) {
        background-color: $color-main;
      }
      &:nth-child(2) {
        border: 0.2rem solid $color-main;
      }
    }
  }
}
</style>
