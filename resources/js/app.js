import './bootstrap';
import { createApp } from 'vue';
import ExampleComponent from 'C:/Users/Jang/portfolio/themes/vue/js/components/ExampleComponent.vue';
import ProfileComponent from 'C:/Users/Jang/portfolio/themes/vue/js/components/ProfileComponent.vue';
const app = createApp({});

app.component('example-component', ExampleComponent);
app.component('profile-component', ProfileComponent);
app.mount('#app');
