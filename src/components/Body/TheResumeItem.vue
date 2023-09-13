<template>
  <div>
    <h2 class="resume__inner-heading--title">
      <span class="icon icon__sub-heading">
        <font-awesome-icon :icon="item.icon" />
      </span>
      {{ item.title }}
    </h2>
    <p v-if="item.location" class="resume__inner-heading--location">
      {{ item.location }}
    </p>
    <span v-if="item.date" class="resume__inner-heading--date">
      {{ item.date }}
    </span>
    <slot name="skills"></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.resume {
  &__inner-heading {
    &--title {
      display: flex;
      align-items: center;
      padding: 1rem;
    }
    &--date {
      color: $color-secondary;
      font-size: 1.2rem;
      text-align: right;
      position: absolute;
      width: 100%;
      right: 1rem;
      bottom: 0rem;
    }
    &--list {
      margin-left: 5rem;
      li {
        margin: 0.5rem 0;
      }
    }
    &--location {
      font-size: 1.3rem;
      color: $color-dark-gray;
      margin-left: 5rem;
      margin-top: -0.5rem;
      padding-bottom: 1rem;
    }
    &--list-single {
      display: flex;
      flex-wrap: wrap;
      margin-left: 3rem;
      li {
        padding: 0.5rem 0.8rem;
        border-radius: $radius-main-round;
        background-color: $color-main-light;
        color: $color-main;
        list-style: none;
        margin: 0.5rem;
      }
    }
  }
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-light;
  border-radius: 100%;
  margin-right: 1rem;
  &__sub-heading {
    background-color: $color-secondary;
    width: 3rem;
    height: 3rem;
    font-size: 1.2rem;
  }
}
</style>
