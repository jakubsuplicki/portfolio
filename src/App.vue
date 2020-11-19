<template>
  <div id="nav">
    <TheHeader/>
    <!-- <router-link to="/">Home</router-link> | -->
  </div>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/Navigation/TheHeader.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    TheHeader,
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
