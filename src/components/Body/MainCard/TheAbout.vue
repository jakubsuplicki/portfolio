<template>
    <div>
        <div class="about">
            <span @click="$store.commit('changeSelection', 'landing')" class="about__landing"><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
            <div class="about__container">
                <h1>Hi,</h1>
                <p>An ambitious, people orientated person with over one year of professional experience and a
                Bachelor of Information Technology from Melbourne Polytechnic. With a high academic
                average and a passion for working on complex and engaging projects to constantly
                challenge my expertise.</p> 
                <p>It’s an ambition of mine to work towards becoming the finest
                programmer possible. My critical problem-solving skills are well developed and help me
                deliver new perspectives and solutions to the challenges that I encounter.</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheAbout'
});
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
    }
    &__container {
        margin-top: 2rem;
    }
}
</style>
