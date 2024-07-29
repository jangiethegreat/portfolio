import './bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp } from 'vue';
import ExampleComponent from 'C:/Users/Jang/portfolio/themes/vue/js/components/ExampleComponent.vue';
import ProfileComponent from 'C:/Users/Jang/portfolio/themes/vue/js/components/ProfileComponent.vue';
import SkillsComponent from 'C:/Users/Jang/portfolio/themes/vue/js/components/SkillsComponent.vue';



const app = createApp({});

app.component('example-component', ExampleComponent);
app.component('profile-component', ProfileComponent);
app.component('skills-component', SkillsComponent);
app.mount('#app');
