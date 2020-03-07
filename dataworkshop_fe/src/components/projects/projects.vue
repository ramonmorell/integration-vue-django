<template>
    <div>
        <p>PROJECTS</p>
        <ProjectsTable :projectsList="projectsList" />
    </div>
</template>

<script>
import ProjectsTable from './proyects-table';
import { projectsListMock } from './projectsMock';
export default {
    name: 'Projects',
    components: { ProjectsTable },
    data: () => ({
        projectsList: projectsListMock
    })
};
</script>

<style></style>
