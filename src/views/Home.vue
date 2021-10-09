<template>
  <article class="home">
    <transition-group name="home_animate">
      <div v-if="$store.getters.getSelection==='about' || $store.getters.getSelection==='landing'" class="home__main-container">
        <the-main />
      </div>
      <the-resume v-else-if="$store.getters.getSelection==='resume'" />
      <the-projects v-else-if="$store.getters.getSelection==='projects'"/>
    </transition-group>
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
  // top: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  &__main-container {
    height: calc(100vh - 16rem); 
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.flip {
  position: relative;
  width: 85vw;
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
 
.home_animate-enter {
  opacity: 0;
}
.home_animate-leave-to {
  opacity: 0;
}
.home_animate-enter-to {
  opacity: 1;
}
.home_animate-leave {
  opacity: 0;
}
.home_animate-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s ease-in-out;
}

.home_animate-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity .5s ease-in-out;
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.home_animate-move {
  transition: transform cubic-bezier(0.47, 0, 0.745, 0.715);
}

@keyframes slide-in {
  from {
    transform: translateY(5rem)
  }

  to {
    transform: translateY(0)
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(5rem)
  }
}
</style>
