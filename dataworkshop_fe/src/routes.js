import Home from './components/home/home.vue';
import Projets from './components/projects/projects.vue';
import WorkShop from './components/workshop/workshop.vue';

export default [
    { path: '/', component: Home },
    { path: '/projects', component: Projets },
    { path: '/workshop', component: WorkShop }
];
