<template>
  <div>
    <div class="about">
      <span @click="$store.commit('changeSelection', 'landing')" class="about__landing"
        ><font-awesome-icon :icon="['fas', 'arrow-left']"
      /></span>
      <div class="about__container">
        <p>
          An ambitious people-oriented full stack developer, with a passion for working on complex
          and engaging projects in a time-sensitive and fast-paced work environment. Professional
          experience of over 5 years in designing, developing, testing, automating, integrating, and
          deploying enterprise applications.
        </p>
        <p>
          An excellent communicator and problem-solver, with the ability to grasp complex systems,
          identify opportunities for improvements and resolve critical issues. Enjoys collaborating
          with technical and non-technical stakeholders to provide business value at start- up
          speed.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheAbout'
})
</script>

<style scoped lang="scss">
.about {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: left;
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  &__landing {
    position: relative;
    font-size: 3rem;
    margin-bottom: 1rem;
    @include respond(tab-port) {
      display: none;
    }
  }
}
</style>
