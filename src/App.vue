<template>
<div class="outer-container">
  <div class="inner-container__navigation">
    <TheHeader class="navigation"/>
  </div>
  <div class="inner-container__body">
    <div class="main">
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
.main {
  display: flex;
  align-items: center;
  max-width: $max-width;
  width: 100%;
  position: relative;
  min-height: calc(100vh - 12rem);
  // background-color: $color-main;
  // background-image: linear-gradient(190deg, $color-main, $color-light);
  // background: linear-gradient(120deg, $color-main 50%, $color-light 50%);
  background-image: url('~@/assets/images/bg_main.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;

  @include respond(tab-land) {
    min-height: calc(100vh - 16rem);
    border-radius: $radius-main;
  }
}

</style>
