<template>
    <div class="mobile-menu">
        <div class="mobile-menu__bg mobile-menu__bg--top"></div>
        <ul class="mobile-menu__navigation-list">
            <li @click="$store.commit('changeSelection', 'landing'), $emit('close')">Home</li>
            <li @click="$store.commit('changeSelection', 'about'), $emit('close')">About me</li>
            <li @click="$store.commit('changeSelection', 'resume'), $emit('close')">Resume</li>
            <li @click="$store.commit('changeSelection', 'projects'), $emit('close')">Projects</li>
        </ul>
        <div class="mobile-menu__bg mobile-menu__bg--bot"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheMobileMenu',
  props: {
    isMobileMenu: Boolean
  }
});
</script>

<style scoped lang="scss">
.mobile-menu {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-image .3s ease-in-out;
    background-image: url('~@/assets/images/bg_main.jpg');
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    // background-image: linear-gradient(190deg, $color-bg-light, $color-bg-dark);
    top:0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 100;
    &__navigation-list {
        position: relative;
        animation-name: appear;
        animation-duration: 1.5s;
        animation-delay: .6s;
        animation-fill-mode: forwards;  
        transition-timing-function: ease-in;
        display: flex;
        flex-direction: column;
        list-style: none;
        z-index: 102;
        opacity: 0;
        li {
            margin: 0 1rem;
            cursor: pointer;
            font-size: 3.5rem;
            margin: 10% auto;
        }
        @keyframes appear {
            0% {
                opacity: 0;
                transform: scale(1);
            }
            100% {
                opacity: 1;
                transform: scale(1.05);
            }
        }
    }
    &__bg {
        position: fixed;
        width: 100%;
        height: 50vh;
        z-index: 101;
        animation: .6s ease-in expand;
        filter: blur(.5rem);
        &--top {
            top: 0;
            background-image: linear-gradient(190deg, $color-bg-light, $color-bg-dark);
            opacity: .2;
        }
        &--bot {
            bottom: 0;
            background-image: linear-gradient(190deg, $color-bg-dark, $color-bg-light);
            opacity: .2;
        }
    }
    @keyframes expand {
      0%{
        height: 6rem;
      }
      100%{
        height: 51vh;
      }
    }
}
</style>
