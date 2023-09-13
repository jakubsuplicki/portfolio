<template>
  <div class="resume">
    <div class="resume__intro">
      <h1>Resume</h1>
    </div>
    <TheResumeSection title="Technical Skills" :icon="['fas', 'cog']">
      <template v-for="category in resumeSkills" :key="category.title">
        <div class="resume__inner-container">
          <TheResumeItem :item="category">
            <template v-slot:skills>
              <ul class="resume__inner-heading--list-single">
                <li v-for="skill in category.skills" :key="skill">{{ skill }}</li>
              </ul>
            </template>
          </TheResumeItem>
        </div>
      </template>
    </TheResumeSection>

    <TheResumeSection title="Professional Experience" :icon="['fas', 'briefcase']">
      <div
        v-for="experience in professionalExperience"
        :key="experience.title"
        class="resume__inner-container"
      >
        <TheResumeItem :item="experience" />
      </div>
    </TheResumeSection>

    <TheResumeSection title="Education" :icon="['fas', 'briefcase']">
      <div v-for="item in education" :key="item.title" class="resume__inner-container">
        <TheResumeItem :item="item" />
      </div>
    </TheResumeSection>

    <TheResumeSection title="University Projects" :icon="['fas', 'graduation-cap']">
      <div v-for="item in universityProjects" :key="item.title" class="resume__inner-container">
        <TheResumeItem :item="item" />
      </div>
    </TheResumeSection>

    <TheResumeSection title="Personal Attributes" :icon="['fas', 'male']">
      <div v-for="item in personalAttributes" :key="item.title" class="resume__inner-container">
        <TheResumeItem :item="item" />
      </div>
    </TheResumeSection>

    <TheResumeSection title="Completed Courses" :icon="['fas', 'stamp']">
      <div class="resume__inner-container">
        <ul class="resume__inner-heading--list">
          <li v-for="course in completedCourses" :key="course">{{ course }}</li>
        </ul>
      </div>
    </TheResumeSection>

    <TheResumeSection title="Academic Achievements" :icon="['fas', 'medal']">
      <transition name="fade">
        <the-modal v-if="showImage === 'transcript'" @close="showImage = null">
          <template v-slot:body>
            <div class="resume__image">
              <img :src="academicAchievements.image" :alt="academicAchievements.alt" />
            </div>
          </template>
        </the-modal>
      </transition>
      <div class="resume__image-container">
        <button @click="showImage = 'transcript'">Open</button>
      </div>
    </TheResumeSection>

    <TheResumeSection title="English Score" :icon="['fas', 'star']">
      <transition name="fade">
        <the-modal v-if="showImage === 'english'" @close="showImage = null">
          <template v-slot:body>
            <div class="resume__image">
              <img :src="englishScore.image" :alt="englishScore.alt" />
            </div>
          </template>
        </the-modal>
      </transition>
      <div class="resume__image-container">
        <button @click="showImage = 'english'">Open</button>
      </div>
    </TheResumeSection>
  </div>
</template>

<script lang="ts">
import TheModal from '@/components/Utils/TheModal.vue'
import TheResumeSection from './TheResumeSection.vue'
import TheResumeItem from './TheResumeItem.vue'
import {
  resumeSkills,
  professionalExperience,
  education,
  universityProjects,
  personalAttributes,
  completedCourses,
  academicAchievements,
  englishScore
} from '@/config/resume'
import { defineComponent } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCode,
  faCog,
  faDatabase,
  faBriefcase,
  faKeyboard,
  faGraduationCap,
  faMale,
  faLightbulb,
  faStamp,
  faMedal,
  faStar,
  faUserGraduate,
  faLaptopMedical,
  faStopwatch,
  faEye,
  faHandSparkles,
  faBusinessTime,
  faTools,
  faDesktop,
  faLaptop,
  faProjectDiagram,
  faCube,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faCode,
  faCog,
  faDatabase,
  faBriefcase,
  faKeyboard,
  faGraduationCap,
  faMale,
  faLightbulb,
  faStamp,
  faMedal,
  faStar,
  faUserGraduate,
  faLaptopMedical,
  faStopwatch,
  faEye,
  faHandSparkles,
  faBusinessTime,
  faTools,
  faDesktop,
  faLaptop,
  faProjectDiagram,
  faCube,
  faLayerGroup
)

export default defineComponent({
  name: 'TheResume',
  components: {
    TheModal,
    TheResumeSection,
    TheResumeItem
  },
  data() {
    return {
      publicPath: '/portfolio',
      showImage: null as string | null,
      resumeSkills,
      professionalExperience,
      education,
      universityProjects,
      personalAttributes,
      completedCourses,
      academicAchievements,
      englishScore
    }
  }
})
</script>

<style scoped lang="scss">
.resume {
  max-width: $max-width-content;
  padding: 1rem;
  box-shadow: $shadow-element;
  background: linear-gradient(0deg, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 80%) 90%);
  color: $color-main;
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
      padding: 0.5rem 1rem;
      color: $color-light;
    }
    &::after {
      content: '';
      display: block;
      margin-top: 1rem;
      width: 4rem;
      height: 0.2rem;
      background-color: $color-secondary;
    }
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
    &--list {
      margin-left: 5rem;
      li {
        margin: 0.5rem 0;
      }
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
  &__image {
    position: relative;
    img {
      max-width: 100%;
    }
  }
}
</style>
