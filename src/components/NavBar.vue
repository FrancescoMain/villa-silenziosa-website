<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header>

    <div class="flex-block">
      <div class="wrap-left">
        <a href="#">MENU</a>
        <h3>VILLA SILENZIOSA</h3>
      </div>
      <div class="wrap-right">

        <ul>
          <li><a href="">ITA</a></li>
          <li><a href="">ENG</a></li>
          <li><a href="">DET</a></li>
        </ul>
        <div class="bottone">RICHIEDI UN PREVENTIVO</div>
        <ul>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          </li>
          <li>
            <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
          </li>
        </ul>
      </div>


    </div>


  </header>

</template>

<style lang="scss" scoped>
header {
  position: fixed;
  height: 124px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;

  .flex-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .wrap-left {
      display: flex;
      margin-left: 90px;
      align-items: center;

      h3 {
        margin-left: 120px;
        font-size: 1.5rem;
      }

    }

    .wrap-right {
      display: flex;
      margin-left: 90px;
      align-items: center;

      ul {
        display: flex;
        list-style: none;
        margin-right: 120px;



        li {
          padding: 0 20px;
          border-right: 2px solid;

          &:last-child {
            border: none;
          }
        }
      }

      .bottone {
        height: 60px;
        min-width: 220px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        margin-right: 120px;
        padding: 0 20px;
        cursor: pointer;
      }

    }

  }
}
</style>
