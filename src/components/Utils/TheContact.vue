<template>
    <div class="contact">
        <div>
            <transition-group name="swap_left">
                <span 
                :class="{'contact--phone-icon': showContact==='email'}" 
                key="icon-phone" v-if="showContact!=='phone'" 
                @click="showContact='phone'">
                    <font-awesome-icon :icon="['fas', 'phone-alt']" /></span>
                <p :class="{'contact--center-text': showContact}" key="phone" v-else>0423 938 992</p>
            </transition-group>
        </div>
        <div>
            <transition-group name="swap_right">
                <span 
                :class="{'contact--email-icon': showContact==='phone'}" 
                key="icon-email" v-if="showContact!=='email'" 
                @click="showContact='email'">
                    <font-awesome-icon :icon="['far', 'envelope']" /></span>
                <p :class="{'contact--center-text': showContact}" key="email" v-else>suplicki.jakub@gmail.com</p>
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEnvelope, faPhoneAlt)

export default defineComponent({
    name: 'TheContact',
    data() {
        return {
            showContact: null
        }
    }
})
</script>

<style lang="scss" scoped>
.contact {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 2rem;
    margin-top: 0.5rem;
    width: 100%;
    background-color: $color-light;
    height: 5rem;
    overflow: hidden;
    z-index: 3;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    p, span {
        position: absolute;
        display: block;
        transition: all 0.6s ease-in-out;
        color: $color-main;
    }
    span {
        font-size: 2.3rem;
        display: block;
        z-index: 1;
        cursor: pointer;
    }
    p {
        font-size: 1.6rem;
    }
    &--phone-icon {
        cursor: pointer;
        left: 2rem;
    }
    &--email-icon {
        cursor: pointer;
        right: 2rem;
    }
    &--center-text {
        left: 50%;
        transform: translateX(-50%)
    }
}
.swap_left-enter-active, .swap_left-leave-active,
.swap_right-enter-active, .swap_right-leave-active {
    position: absolute;
    opacity: 0;
}
.swap_left-enter, .swap_left-leave-to {
    opacity: 0;
    transform: translateX(-12rem);
}
.swap_right-enter, .swap_right-leave-to {
    opacity: 0;
    transform: translateX(6rem);
}
</style>