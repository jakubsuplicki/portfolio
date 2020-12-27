<template>
  <article class="home">
    <the-main v-if="$store.getters.getSelection==='about' || $store.getters.getSelection==='landing'" />
    <the-resume v-else-if="$store.getters.getSelection==='resume'" />
    <the-projects v-else-if="$store.getters.getSelection==='projects'"/>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheMain from '@/components/Body/TheMain.vue';
import TheProjects from '@/components/Body/TheProjects.vue';
import TheResume from '@/components/Body/TheResume.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheMain,
    TheProjects,
    TheResume
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
  width: 85vw;
  height: 48rem;
  padding-bottom: 2rem;
  perspective: 1000;
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
			transform-style: preserve-3d;
			z-index:1;
    }
    &--back {
      transform: rotateY(180deg);
			transform-style: preserve-3d;
			z-index:1;
    }
    &--rotate-front {
			transform: rotateY(-180deg);
			transform-style: preserve-3d;
    }
    &--rotate-back {
      transform: rotateY(0deg);
			transform-style: preserve-3d;
    }
  }
}
</style>
