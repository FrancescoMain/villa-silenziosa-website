<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <header>
    <div class="container">
      <div class="flex-block">
        <div class="wrap-left">
          <!-- bottone menu  -->
          <a href="#">MENU</a>
          <!-- TITOLO  -->
          <h2>VILLA SILENZIOSA</h2>
        </div>
        <div class="wrap-right">
          <!-- LINGUA DESKTOP  -->
          <div class="none">
            <ul>
              <li><a href="">ITA</a></li>
              <li><a href="">ENG</a></li>
              <li><a href="">DET</a></li>
            </ul>
          </div>
          <!-- BOTTONE CONTATTO  -->
          <div class="bottone">RICHIEDI UN PREVENTIVO</div>
          <!-- LINK SOCIAL  -->
          <ul>
            <li>
              <a class="icon" href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </li>
            <li>
              <a class="icon" href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            </li>
          </ul>
        </div>


      </div>
    </div>



  </header>

</template>

<style lang="scss" scoped>
header {
  justify-content: center;
  display: flex;

  .container {
    width: 90%;
  }

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
      align-items: center;
      gap: 50px;
    }

    .wrap-right {
      display: flex;
      align-items: center;
      gap: 50px;


      ul {
        display: flex;
        list-style: none;




        li {
          padding: 0 20px;
          border-right: 2px solid;

          &:last-child {
            border: none;
          }

          .icon {
            font-size: 1.2rem;
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
        padding: 0 20px;
        cursor: pointer;
      }

    }

  }
}

@media all and (max-width: 1250px) {
  .none {
    display: none;
  }

  header {

    .container {
      width: 98%;
    }
  }

  // h2,
  // .bottone {
  //   font-size: 0.8rem;
  // }

  //   a {
  //     font-size: 0.7rem;
  //   }
}
</style>
