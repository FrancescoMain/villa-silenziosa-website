<script >
import NavBar from './components/NavBar.vue'
import Main from './components/Main.vue'
import Section from './components/Section.vue'


export default {

  name: "App",
  components: {
    NavBar,
    Main,
    Section,


  }

}

</script>

<template>
  <!-- header  -->
  <NavBar />
  <!-- Main  -->
  <Main />
  <Section />


</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>