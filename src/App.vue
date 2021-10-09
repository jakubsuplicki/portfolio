<template>
<div class="outer-container">
  <div class="inner-container__navigation">
    <TheHeader class="navigation"/>
  </div>
  <div class="inner-container__body">
    <div class="main" :class="{show_scroll: $store.getters.getSelection!=='landing' && $store.getters.getSelection!=='about'}">
      <router-view />
    </div>
  </div>
  <div class="inner-container__navigation">
    <TheFooter class="navigation"/>
  </div>
</div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/Navigation/TheHeader.vue';
import TheFooter from '@/components/Navigation/TheFooter.vue';

export default defineComponent({
  name: 'Home',
  components: {
    TheHeader,
    TheFooter
  },
});
</script>
<style lang="scss">
.outer-container {
  margin: auto;
  background-image: linear-gradient(190deg, $color-bg-light, $color-bg-dark);
}
.inner-container {
  &__navigation {
    display: flex;
    justify-content: center;
  }
  &__body {
    display: flex;
    justify-content: center;
  }
}
.navigation {
  max-width: $max-width;
  width: 100%;
  display: flex;
  align-items: center;
}
.show_scroll {
  overflow-y: scroll !important;
}
.main {
  max-width: $max-width;
  width: 100%;
  position: relative;
  height: calc(100vh - 12rem);
  background-image: url('~@/assets/images/bg_main.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: 0% 15%;
  overflow: hidden;
  @include respond(tab-land) {
    height: calc(100vh - 14rem);
    border-radius: $radius-main;
  }
}

</style>
