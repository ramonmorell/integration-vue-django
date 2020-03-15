<template>
    <div class="container">
        <div class="row">
            <table class="table">
                <thead class="thead-dark">
                    <tr class="d-flex">
                        <th class="col-2 col-md-1" scope="col">
                            {{ $t('PROJECTS.ID') }}
                        </th>
                        <th class="col-3 col-md-3" scope="col">
                            {{ $t('PROJECTS.NAME') }}
                        </th>
                        <th class="col-4 col-md-6" scope="col">
                            {{ $t('PROJECTS.DESCRIPTION') }}
                        </th>
                        <th class="col-3 col-md-2" scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="d-flex"
                        v-for="proyect in projectsList"
                        v-bind:key="proyect.id"
                    >
                        <th class="col-2 col-md-1" scope="row">
                            {{ proyect.id }}
                        </th>
                        <td class="col-3 col-md-3">{{ proyect.name }}</td>
                        <td class="col-4 col-md-6">
                            {{ proyect.description }}
                        </td>
                        <td class="col-3 col-md-2">
                            <div class="col-md-12">
                                <button
                                    class="btn btn-outline-primary col-sm-12 margin-custom"
                                >
                                    {{ $t('PROJECTS.SHOW') }}
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-outline-success col-sm-12 margin-custom"
                                >
                                    {{ $t('PROJECTS.RESULTS') }}
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsTable',
    components: {},
    data: () => ({
        // listado: ['hola', 'Adios']
    }),
    props: {
        projectsList: Array
    },
    methods: {}
};
</script>

<style>
.margin-custom {
    margin-top: 10px;
}
</style>
