<template>
    <div class="projects">
        <div class="header">
            <h1>Projects</h1>
            <span></span>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>iSubbie Web Application</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>An intuitive platform that provides biddable job leads for tradespeople, featuring a strict and system-assisted workflow for the complete lifecycle of a job.</p>
                    </div>
                </div>
                <div class="project__description--right">
                    <img src="@/assets/images/isubbie.jpg" alt="project-image">
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack1" :key="tech+'1'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>Received positive feedback from stakeholders on a project that was successfully delivered on time and on budget. Developed a stable application with no critical and high severity issues in production since go-live. Anticipated increase in business revenue and reduction in cost – circa 20%. 
                        <br><br>
                        Led the technology strategy and played a key role in creation of the application.  Evaluated and became knowledgeable in a new technologies, standards, and trends in web application development.</p>
                    </div>
                </div>
            </div>
            <div class="project__footer">
                <a href="https://isubbie.com.au" target="_blank">Go to iSubbie</a>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Breakdowns app</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>An automatic system that connects with the AroFlo CRM system through the API, in order to pre-fetch relevant information and quickly generate job breakdowns.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack2" :key="tech+'2'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>One person can now generate more than 20 breakdowns per day in comparison to 2-3 breakdowns, which is a 90% increase in productivity.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Bookings app</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>The purpose of this project was to create an external system that again connects with the AroFlo CRM system through the API in order to be able to complete the bookings without the need of accessing CRM itself, either with admin access or by uniquely generated URL that can be sent do client in order to complete the booking.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack3" :key="tech+'3'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>The app is still in its early stages, but the speed of making a booking is expected to be increased by over 50% but also allows customers to make their own bookings which saves admin time dramatically.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Internal APIs app</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>The idea was to create a dedicated server that consists of internal API endpoints that can be called from within different applications in the company that tends to use similar features.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack4" :key="tech+'4'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>Increased the efficiency of developing new applications by exposing secured API endpoints that can be reused across different applications that use similar features such as integration with AroFlo CRM system, GroupMe APIs, Google APIs, etc.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Online Catalogue</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>A WooCommerce website consists of products and services provided by the company. The purpose of this project was to convert a paper-based catalogue into an easily accessible, online-based catalogue that allowed for a quick search or to edit / add and an item or a service.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack5" :key="tech+'5'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>Delivered an online catalogue which saves significant time in finding the correct product and price.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Multiple Customised WordPress Websites</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>The purpose was to create multiple landing pages in order to gather more leads and ultimately increase the number of clients.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack6" :key="tech+'6'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>The business expanded by at least 30% due to increased reach and job-specific content on each website.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project__header">
                <h1>Automation Tools</h1>
            </div>
            <div class="project__description">
                <div class="project__description--left">
                    <div class="project__description--left-description">
                        <p>Small projects to automate business processes such as automated group chats creation on the job, or being able to generate a chat transcript into PDF format, etc.</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Tech Stack</h1>
                    </div>
                    <div class="project__tech-stack">
                        <p v-for="tech of projectStack7" :key="tech+'7'">{{tech}}</p>
                    </div>
                </div>
                <div>
                    <div class="project__header">
                        <h1>Achievements</h1>
                    </div>
                    <div class="project__achievement">
                        <p>Implementing these tools helped avoid human errors and could be used right away.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheProjects',
    data() {
        return {
            projectStack1: ['Nuxt.js', 'Vue.js', 'Node.js', 'Express', 'SCSS', 'MongoDB', 'Mongoose ODM', 'MongoDB Atlas', 'Git', 'AWS Beanstalk', 'AWS S3', 'Nginx', 'RESTful API', 'MVC', 'PWA', 'Service Workers', 'Socket.io', 'JWT', 'Passport', 'Winston', 'AroFlo API', 'GroupMe API'],
            projectStack2: ['Vue.js', 'Node.js', 'TypeScript', 'Express', 'SCSS', 'Git', 'AWS EC2', 'AWS S3', 'Nginx', 'RESTful API', 'MVC', 'PWA', 'Service Workers', 'JWT', 'AroFlo API'],
            projectStack3: ['Vue.js', 'Node.js', 'TypeScript', 'Express', 'SCSS', 'Git', 'AWS EC2', 'AWS S3', 'Nginx', 'RESTful API', 'MVC', 'PWA', 'Service Workers', 'JWT', 'Google Places API', 'AroFlo API'],
            projectStack4: ['Vue.js', 'Node.js', 'TypeScript', 'Express', 'SCSS', 'Git', 'AWS EC2', 'AWS S3', 'Nginx', 'RESTful API', 'MVC', 'PWA', 'Service Workers', 'JWT', 'Google Scripts', 'AroFlo API', 'GroupMe API'],
            projectStack5: ['jQuery', 'PHP', 'WordPress', 'WooCommerce', 'MySQL'],
            projectStack6: ['jQuery', 'PHP', 'WordPress'],
            projectStack7: ['Node.js', 'Express', 'Google Scripts', 'AroFlo API', 'GroupMe API', 'AWS S3'],
        }
    } 
});
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
    }
    &::after {
        content: '';
        display: block;
        margin-top: 1rem;
        width: 4rem;
        height: .2rem;
        background-color: $color-main-light;
    }
}
.projects {
    position: relative;
}
.project {
    margin: 0 1rem 1rem 1rem;
    padding: 0.5rem;
    background: linear-gradient(0deg, rgb(255 255 255 / 70%) 0%, rgb(255 255 255 / 95%) 95%); color: $color-main;
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
            height: .2rem;
            background-color: $color-main;
        }
    }
    &__tech-stack {
        margin: 0 1rem;
        display: flex;
        flex-wrap: wrap;
        margin: 1rem 0;
        p {
            margin: .5rem 1rem;
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
        background-color: $color-main;
        text-align: center;
        a {
            color: white;
        }
    }
}
</style>
