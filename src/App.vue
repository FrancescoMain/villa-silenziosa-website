<script >
import NavBar from './components/NavBar.vue'


export default {

  name: "App",
  components: {
    NavBar,


  }

}

</script>

<template>
  <!-- header  -->
  <NavBar />


</template>

<style lang="scss">
@use "../src/styles/generals.scss";
</style>