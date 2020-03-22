<template>
    <div>
        <p>PROJECTS</p>
        <ProjectsTable :projectsList="$store.getters.projects" />
    </div>
</template>

<script>
import ProjectsTable from './proyects-table';
// import { projectsListMock } from './projectsMock';
import httpSrv from '../../httpSrv/httpSrv.js';
export default {
    name: 'Projects',
    components: { ProjectsTable },
    data: () => ({
        projectsList: []
    }),
    created: function() {
        console.log('CREATED PROJECTS COMPONENT');
        const res = httpSrv.get('projects/');
        const _store = this.$store;
        res.then(res => {
            _store.commit('loadProjects', res);
        });
    }
};
</script>

<style></style>
