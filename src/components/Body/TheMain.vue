<template>
    <div class="flip">
      <div
      :class="{'flip__each--rotate-front': $store.getters.getSelection==='about'}"
      class="flip__each flip__each--front" 
      key="landing">
        <the-landing :class="{'flip__each--content-flip': $store.getters.getSelection==='about'}" class="flip__each--content" />
        <the-contact />
      </div>
      <div 
      :class="{'flip__each--rotate-back': $store.getters.getSelection==='about'}"
      class="flip__each flip__each--back" 
      key="about">
        <the-about :class="{'flip__each--content-flip': $store.getters.getSelection==='landing'}" class="flip__each--content"/>
        <the-contact />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheLanding from '@/components/Body/MainCard/TheLanding.vue';
import TheAbout from '@/components/Body/MainCard/TheAbout.vue';
import TheContact from '@/components/Utils/TheContact.vue';

export default defineComponent({
  name: 'TheMain',
  components: {
    TheLanding,
    TheAbout,
    TheContact
  }
});
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
  z-index:1;
  &__each {
    position: absolute;
    width:100%;
    height:100%;
    background-color: $color-secondary;
    opacity: 0.9;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    z-index:1;
    &--front, &--back {
      transition: transform 0.60s cubic-bezier(.5,.3,.3,1);
      backface-visibility: hidden;
			overflow: hidden;
			position:absolute;
			top:0;
    }
    &--front {
			transform: rotateY(0deg);
			z-index:1;
    }
    &--back {
      transform: rotateY(180deg);
			z-index:1;
    }
    &--rotate-front {
			transform: rotateY(-180deg);
    }
    &--rotate-back {
      transform: rotateY(0deg);
    }
    &--content {
			position:relative;
      transition: transform 0.60s cubic-bezier(.5,.4,.4,1);
      transform: translateX(0rem) scale(1);
      z-index:2;
    }
    &--content-flip {
      transform: translateX(-20rem) scale(.85);
    }
  }
}
</style>
