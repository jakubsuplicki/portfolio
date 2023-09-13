<template>
  <div class="projects">
    <div class="header">
      <h1>Projects</h1>
    </div>
    <div class="project" v-for="project in projectsList" :key="project.title">
      <div class="project__header">
        <h1>{{ project.title }}</h1>
      </div>
      <div class="project__description">
        <div class="project__description--left">
          <div class="project__description--left-description">
            <p>{{ project.description }}</p>
          </div>
        </div>
        <div>
          <div class="project__header">
            <h1>Tools</h1>
          </div>
          <div class="project__tech-stack">
            <p v-for="tech in getTechStack(project as Project)" :key="tech">{{ tech }}</p>
          </div>
        </div>
        <div>
          <div class="project__header">
            <h1>Achievements</h1>
          </div>
          <div class="project__achievement">
            <p v-for="achievement in getAchievements(project as Project)" :key="achievement">
              {{ achievement }}
            </p>
          </div>
        </div>
        <div class="project__footer" v-if="getLinks(project as Project)">
          <a
            v-for="link in getLinks(project as Project)"
            :href="link.url || link.href"
            target="_blank"
            :key="link.url"
            >{{ link.text }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { projects } from '@/config/projects'
import { Project, Link } from '@/types/project'
export default {
  name: 'TheProjects',
  data() {
    return {
      projectsList: projects
    }
  },
  methods: {
    getTechStack(project: Project): string[] {
      return Array.isArray(project.tools) ? project.tools : project.tools.stack || []
    },
    getAchievements(project: Project): string[] {
      return Array.isArray(project.achievements)
        ? project.achievements
        : project.achievements.content || []
    },
    getLinks(project: Project): Link[] | null {
      if (!project.links) return null
      return Array.isArray(project.links) ? project.links : project.links.urls || []
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }
  &::after {
    content: '';
    display: block;
    margin-top: 1rem;
    width: 4rem;
    height: 0.2rem;
    background-color: $color-main-light;
  }
}
.projects {
  position: relative;
}
.project {
  margin: 0 1rem 2rem 1rem;
  padding: 1rem 0.5rem;
  background: linear-gradient(0deg, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 95%) 95%);
  color: $color-main;
  border-radius: $radius-main;
  box-shadow: $shadow-element;
  @include respond(tab-port) {
    max-width: $max-width-content;
  }
  &__header {
    padding: 1rem 0 0 1rem;
    &::after {
      content: '';
      display: block;
      margin-top: 1rem;
      width: 4rem;
      height: 0.2rem;
      background-color: $color-main;
    }
  }
  &__tech-stack {
    margin: 0 1rem;
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
    p {
      margin: 0.5rem 1rem;
      padding: 0.5rem 0.8rem;
      border-radius: 3.4rem;
      background-color: $color-main-light;
      color: $color-main;
      list-style: none;
      margin: 0.5rem;
    }
  }
  &__description {
    &--left {
      padding: 1rem 1rem 0 1rem;
      p {
        margin-bottom: 1rem;
      }
    }
    &--right {
      position: relative;
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      img {
        box-shadow: $shadow-element;
        border-radius: $radius-main;
      }
    }
  }
  &__achievement {
    margin: 0 1rem;
    p {
      margin: 1rem 0;
    }
  }
  &__footer {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    margin: auto;
    a {
      border-radius: $radius-main;
      margin: 0.5rem;
      padding: 0.8rem 1rem;
      max-width: 20rem;
      min-width: 10rem;
      background-color: $color-main;
      text-align: center;
      box-shadow: $shadow-element;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
