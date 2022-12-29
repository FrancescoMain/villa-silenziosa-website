<script >
import { store } from "../store.js";
import Section from './Section.vue'
import Hero from './Hero.vue'


export default {

    name: "Main",
    components: {
        Hero,
        Section


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
        <Section :data="store" />
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;


@media all and (max-width: 1250px) {}


@media all and (max-width: 900px) {}
</style>
