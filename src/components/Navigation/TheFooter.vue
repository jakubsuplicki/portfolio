<template>
  <footer class="footer">
    <div class="media">
        <div class="media__icons">
            <a :color="iconColor" :style="{color: iconColor}" href="https://stackoverflow.com/users/6170233/jakub-a-suplicki" target="_blank"><font-awesome-icon :icon="['fab', 'stack-overflow']" /></a>
            <a :color="iconColor" :style="{color: iconColor}" href="https://codepen.io/jakub-suplicki/pens/popular" target="_blank"><font-awesome-icon :icon="['fab', 'codepen']" /></a>
            <a :color="iconColor" :style="{color: iconColor}" href="https://github.com/jakubsuplicki" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a :color="iconColor" :style="{color: iconColor}" href="https://www.linkedin.com/in/jakub-suplicki/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStackOverflow, faCodepen, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faStackOverflow, faCodepen, faLinkedin, faGithub)

export default defineComponent({
  name: 'TheNavigator'
});
</script>

<style scoped lang="scss">
.footer {
  height: 6rem;
  justify-content: center;
  @include respond(tab-land) {
    height: 10rem;
  }
  &__contact {
    width: 100%;
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      flex-direction: column;
      p {
        margin-top: 1rem;
      }
    }
  }
}
.media {
    width: 45%;
    margin: auto;
    a {
        color: white;
        font-size: 1.8rem;
    }
    &__icons {
        display: flex;
        justify-content: space-around;
    }
}
</style>
