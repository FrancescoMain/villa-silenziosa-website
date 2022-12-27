<script >
import { store } from "../store.js";
import Hero from './hero.vue'


export default {

    name: "Main",
    components: {
        Hero


    },
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <main>
        <Hero :data="store" />
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;


@media all and (max-width: 1250px) {}


@media all and (max-width: 900px) {}
</style>
