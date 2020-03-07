<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a
                        v-for="menuItem in menuItems"
                        :key="menuItem.id"
                        class="nav-item nav-link"
                        :href="menuItem.url"
                        @click="e => onclickItem(e, menuItem.id, menuItem.url)"
                        :class="{ active: menuItem.active }"
                        ><span class="menuItem">{{
                            $t(`NAVBAR.${menuItem.name}`)
                        }}</span></a
                    >
                </div>
            </div>
            <div><LocaleChanger /></div>
        </nav>
    </div>
</template>

<script>
import LocaleChanger from './LocaleChanger.vue';

export default {
    name: 'MainPage',
    components: { LocaleChanger },
    data: function() {
        return {
            menuItems: [
                {
                    id: '1',
                    name: 'INICIO',
                    url: '/',
                    active: this.$router.history.current.path === '/'
                },
                {
                    id: '2',
                    name: 'PROYECTOS',
                    url: '/projects',
                    active: this.$router.history.current.path === '/projects'
                },
                {
                    id: '3',
                    name: 'WORKSHOP',
                    url: '/workshop',
                    active: this.$router.history.current.path === '/workshop'
                }
            ]
        };
    },
    methods: {
        onclickItem(e, itemId, url) {
            e.preventDefault();
            // console.log(e, url);
            this.menuItems = this.menuItems.map(item => {
                return { ...item, active: item.id === itemId };
            });
            if (this.$router.history.current.path !== url)
                this.$router.push(url);
        }
    }
};
</script>

<style>
.menuItem {
    margin-left: 5px;
}
a.active .menuItem {
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
}
</style>
