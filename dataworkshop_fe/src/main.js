import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import './assets/app.scss';
import i18n from './i18n';
import VueRouter from 'vue-router';
import routes from './routes';

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
