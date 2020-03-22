import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        projects: []
    },
    mutations: {
        loadProjects(state, projects) {
            state.projects = projects;
        }
    },
    getters: {
        projects: state => state.projects
    }
});

export default store;
