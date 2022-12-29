<script >
import NavBar from './components/NavBar.vue'
import Main from './components/Main.vue'

import "@fontsource/cormorant-garamond";


export default {

  name: "App",
  components: {
    NavBar,
    Main,



  }

}

</script>

<template>
  <!-- header  -->
  <NavBar />
  <!-- Main  -->
  <Main />



</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>