<template>
  <div class="resume__outer-container">
    <h1 class="resume__main-heading">
      <span class="icon icon__heading">
        <font-awesome-icon :icon="icon" />
      </span>
      {{ title }}
    </h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
.resume {
  &__main-heading {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  &__outer-container {
    position: relative;
  }
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-light;
  border-radius: 100%;
  margin-right: 1rem;
  &__heading {
    background-color: $color-main-light;
    color: $color-secondary;
    width: 3.5rem;
    height: 3.5rem;
  }
}
</style>
