<template>
    <div class="resume">
        <div class="resume__intro">
            <h1>Resume</h1>
            <!-- <a :href="`${publicPath}cv.pdf`" target="_blank">Open CV</a> -->
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'cog']" /></span>
            Technical Skills</h1>
            <div class="resume__inner-container">
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'code']" /></span>
                    Programming Languages</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Vue.js</li>
                    <li>Nuxt.js</li>
                    <li>jQuery</li>
                    <li>TypeScript</li>
                    <li>PHP</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>HTML5</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'database']" /></span>
                    Database Systems</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>MySQL</li>
                    <li>Oracle SQL</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'tools']" /></span>
                    Development Tools</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>Ajax</li>
                    <li>Axios</li>
                    <li>AWS (EC2, Elastic Beanstalk, S3)</li>
                    <li>FileZilla</li>
                    <li>Git & GitHub</li>
                    <li>GraphQL</li>
                    <li>MongoDB Atlas</li>
                    <li>Nginx</li>
                    <li>RESTful API</li>
                    <li>Postman</li>
                    <li>PWA</li>
                    <li>Service Workers</li>
                    <li>Travis CI </li>
                    <li>Webpack</li>
                    <li>WordPress</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'laptop']" /></span>
                    Computer Software</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>Visual Studio Code</li>
                    <li>Photoshop</li>
                    <li>Filezilla</li>
                    <li>Postman</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'desktop']" /></span>
                    Operating Systems</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>macOS</li>
                    <li>Windows</li>
                    <li>Linux (Ubuntu)</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'project-diagram']" /></span>
                    Visual Modelling</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>Activity Diagram</li>
                    <li>Workflow Diagram</li>
                    <li>Sitemap Diagram</li>
                    <li>Process Flow Diagram</li>
                    <li>SWOT Analysis</li>
                    <li>Flow Chart</li>
                    <li>Use Case Diagram</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'cube']" /></span>
                    Testing</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>System integration</li>
                    <li>User acceptance</li>
                </ul>
                <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'layer-group']" /></span>
                    Development Skills</h2>
                <ul class="resume__inner-heading--list-single">
                    <li>REST API Design</li>
                    <li>User Experience</li>
                    <li>Design (UI, UX, Prototyping)</li>
                    <li>Relational Database System Development</li>
                    <li>Non-Relational Database System Development</li>
                </ul>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'briefcase']" /></span>
            Professional Experience</h1>
            <div class="resume__inner-container">
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'keyboard']" /></span>
                    Full Stack Developer</h2>
                    <p class="resume__inner-heading--location">Seven West Media</p>
                    <span class="resume__inner-heading--date">October 2021 - Present</span>
                </div>
            </div>
        </div>   
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'briefcase']" /></span>
            Professional Experience</h1>
            <div class="resume__inner-container">
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'keyboard']" /></span>
                    Senior Full Stack Developer</h2>
                    <p class="resume__inner-heading--location">Your Local Plumbing Group Melbourne</p>
                    <span class="resume__inner-heading--date">July 2018 - Present</span>
                </div>
            </div>
        </div>     
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'briefcase']" /></span>
            Education</h1>
            <div class="resume__inner-container">
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'user-graduate']" /></span>
                    Bachelor of Information Technology</h2>
                    <p class="resume__inner-heading--location">Melbourne Polytechnic</p>
                    <span class="resume__inner-heading--date">July 2015 – July 2018</span>
                </div>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></span>
            University Projects</h1>
            <div class="resume__inner-container">
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'laptop-medical']" /></span>
                    IMgateway Consumer Application</h2>
                    <p class="resume__inner-heading--location">Melbourne Polytechnic</p>
                    <span class="resume__inner-heading--date">July 2017 - May 2018</span>
                </div>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'male']" /></span>
            Personal Attributes</h1>
            <div class="resume__inner-container">
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'stopwatch']" /></span>
                    Time Management</h2>
                </div>
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'eye']" /></span>
                    Eye for Detail</h2>
                </div>
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'hand-sparkles']" /></span>
                    Self-motivated</h2>
                </div>
                <div class="resume__inner-heading">
                    <h2 class="resume__inner-heading--title"><span class="icon icon__sub-heading"><font-awesome-icon :icon="['fas', 'business-time']" /></span>
                    Punctuality</h2>
                </div>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'stamp']" /></span>
            Completed Courses</h1>
            <div class="resume__inner-container">
                <ul class="resume__inner-heading--list">
                    <li>Vue JS 2 - The complete Guide (incl. Vue Router & Vuex)</li>
                    <li>The Complete Node.js Developer Course (3rd Edition)</li>
                    <li>The Complete JavaScript Course 2019: Build Real Projects!</li>
                    <li>Nuxt.js - Vue.js on Steroids</li>
                    <li>ES6 Javascript: The Complete Developer's Guide</li>
                    <li>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</li>
                    <li>The Complete React Native + Hooks Course [2019 Edition]</li>
                </ul>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'medal']" /></span>
            Academic Achievements</h1>
            <transition name="fade">
                <the-modal v-if="showImage==='transcript'" @close="showImage=null">
                    <template v-slot:body>
                        <div class="resume__image">
                            <img src="@/assets/images/transcript-min.jpg" alt="transcript">
                        </div>
                    </template>
                </the-modal>
            </transition>
            <div class="resume__image-container">
                <button @click="showImage='transcript'">Open</button>
            </div>
        </div>
        <div class="resume__outer-container">
            <h1 class="resume__main-heading"><span class="icon icon__heading"><font-awesome-icon :icon="['fas', 'star']" /></span>
            English Score</h1>
            <transition name="fade">
                <the-modal v-if="showImage==='english'" @close="showImage=null">
                    <template v-slot:body>
                        <div class="resume__image">
                            <img src="@/assets/images/english-min.jpg" alt="english score">
                        </div>
                    </template>
                </the-modal>
            </transition>
            <div class="resume__image-container">
                <button @click="showImage='english'">Open</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faCog, faDatabase, faBriefcase, faKeyboard, faGraduationCap, 
faMale, faLightbulb, faStamp, faMedal, faStar, faUserGraduate, faLaptopMedical, 
faStopwatch, faEye, faHandSparkles, faBusinessTime, faTools, faDesktop, faLaptop, faProjectDiagram, faCube, faLayerGroup } 
from '@fortawesome/free-solid-svg-icons'
library.add(faCode, faCog, faDatabase, faBriefcase, 
faKeyboard, faGraduationCap, faMale, faLightbulb, faStamp, 
faMedal, faStar, faUserGraduate, faLaptopMedical, faStopwatch, 
faEye, faHandSparkles, faBusinessTime, faTools, faDesktop, faLaptop, faProjectDiagram, faCube, faLayerGroup)

import TheModal from '@/components/Utils/TheModal.vue';

import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TheResume',
    components: {
        TheModal
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            showImage: null
        }
    }
});
</script>

<style scoped lang="scss">
.resume {
    max-width: $max-width-content;
    padding: 1rem;
    box-shadow: $shadow-element;
    background: linear-gradient(0deg, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 80%) 90%); color: $color-main;
    @include respond(tab-port) {
        margin: 3rem 0 3rem 0;
        border-radius: $radius-main;
        top: 0rem;
        position: relative;
    }
    &__intro {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem 0;
        h1 {
            font-size: 2rem;
            letter-spacing: 0.2rem;
        }
        a {
            text-decoration: none;
            position: absolute;
            right: 1rem;
            bottom: 0;
            background-color: $color-main;
            border-radius: $radius-main-round;
            padding: .5rem 1rem;
            color: $color-light;
        }
        &::after {
            content: '';
            display: block;
            margin-top: 1rem;
            width: 4rem;
            height: .2rem;
            background-color: $color-secondary;
        }
    }
    &__main-heading {
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }
    &__outer-container {
        position: relative;
    }
    &__inner-container {
        position: relative;
        padding: 1rem;
    }
    &__image-container {
        display: flex;
        justify-content: center;
        position: relative;
        padding: 1rem;
        button {
            padding: $btn-padding;
            border-radius: $radius-main-round;
            color: $color-light;
            font-size: 1.4rem;
            text-align: center;
            background-color: $color-main;
        }
    }
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
                margin: .5rem 0;
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
                padding: .5rem .8rem;
                border-radius: $radius-main-round;
                background-color: $color-main-light;
                color: $color-main;
                list-style: none;
                margin: .5rem;
            }
        }
    }
    &__image {
        position: relative;
        img {
            max-width: 100%;
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
    &__heading {
        background-color: $color-main-light;
        color: $color-secondary;
        width: 3.5rem;
        height: 3.5rem;
    }
    &__sub-heading {
        background-color: $color-secondary;
        width: 3rem;
        height: 3rem;
        font-size: 1.2rem;
    }
}
</style>
