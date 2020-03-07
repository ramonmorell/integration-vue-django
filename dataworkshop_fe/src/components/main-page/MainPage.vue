<template>
    <div class="container">
        <Navbar />
        <div class="container"><router-view></router-view></div>
    </div>
</template>

<script>
import Navbar from '../navbar/Navbar.vue';

export default {
    name: 'MainPage',
    components: { Navbar },
    data: () => ({}),
    methods: {}
};
</script>

<style></style>
