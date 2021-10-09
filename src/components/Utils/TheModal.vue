<template>
  <transition name="mobile_menu_activate">
    <div class="modal-outer">
      <div class="modal-backdrop" @click="$emit('close')"></div>
      <div class="modal"
        role="dialog">
        <header class="modal__header">
          <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close modal">
            &#10005;
          </button>
        </header>
        <section class="modal__body">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheModal'
})
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    backface-visibility: hidden;
    overflow: hidden;
  }
  .modal-outer {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 999;
  }
  .modal {
    position: fixed;
    background: $color-light;
    display: flex;
    flex-direction: column;
    width: 90%;
    text-align: center;
    opacity: 0.95;
    backface-visibility: hidden;
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 90%;
    border-radius: $radius-main;
    z-index: 10000;
    @include respond(tab-port) {
      overflow-y: hidden;
    }
    &__header {
      display: flex;
      padding: 0.5rem 2.5rem;
      justify-content: flex-end;
      background-color: $color-third;
      
      button {
        color: $color-light;
      }
    }
    &__body {
      position: relative;
      overflow-y: scroll;
    }
  }
  .btn-close {
    border: none;
    font-size: 2.8rem;
    padding: 0px;
    font-weight: 400;
    cursor: pointer;
    color: $color-main;
    outline: none;
    backface-visibility: hidden;
    overflow: hidden;
  }
</style>