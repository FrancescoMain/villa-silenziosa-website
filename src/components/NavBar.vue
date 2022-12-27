<script >
import { store } from "../store.js";


export default {

  name: "NavBar",

  data() {
    return {
      store,
      dropdown: false
    }
  },
  methods: {
    dropdownChange() {
      if (this.dropdown) {
        this.dropdown = false;
      } else {
        this.dropdown = true;
      }
    }
  }

}
</script>

<template>
  <header>
    <div class="container">
      <div class="flex-block">
        <div class="wrap-left">
          <!-- bottone menu  -->
          <div class="menu-link">
            <font-awesome-icon icon="fa-solid fa-grip-lines" />
          </div>

          <!-- TITOLO  -->
          <h2>VILLA SILENZIOSA</h2>
          <div class="dropdown" @click="dropdownChange()" @mouseleave="dropdown = false">
            <button class="dropdown-lang">LINGUA</button>
            <font-awesome-icon icon="fa-solid fa-angle-down" />
            <div v-if="dropdown" class="down">
              <a v-for="lang in store.languages" :key="lang.name" :href="lang.link">{{ lang.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="wrap-right">
          <!-- LINGUA DESKTOP  -->
          <div class="none">
            <ul>
              <li v-for="lang in store.languages" :key="lang.name">
                <a :href="lang.link">{{ lang.name }}</a>
              </li>
            </ul>
          </div>
          <!-- BOTTONE CONTATTO  -->
          <div class="bottone">RICHIEDI UN PREVENTIVO</div>
          <!-- LINK SOCIAL  -->
          <ul class="social">
            <li v-for="social in store.socials" :key="social.name">
              <a class="icon" :href="social.link"><font-awesome-icon :icon="social.icon" /></a>
            </li>
          </ul>
          <font-awesome-icon icon="fa-solid fa-grip-lines" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../../src/styles/partials/variables.scss" as *;

header {
  justify-content: center;
  display: flex;
  position: fixed;
  height: 124px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: $bg-1;

  .container {
    width: 90%;
  }

  .flex-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .wrap-left {
      display: flex;
      align-items: center;
      gap: 50px;


      .menu-link {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: $col-3;
        height: 80px;
        font-size: 2rem;

        &:hover {
          color: $col-2;
          transition: 0.15s linear;
        }


        button {
          cursor: pointer;
          color: $col-3;
        }

        .fa-grip-lines {
          margin-left: 10px;
        }
      }

      .dropdown {
        display: none;
        color: $col-3;

        &:hover button,
        &:hover {
          color: $col-2;
          transition: 0.15s linear;
        }

        .down {
          display: flex;
          flex-direction: column;
          position: absolute;
          width: 70px;

          a {
            color: $col-3;
            margin: 4px 0;

            &:hover {
              color: $col-2;
              transition: 0.15s linear;


            }

          }
        }

        button {
          color: $col-3;

        }
      }
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
          color: $col-3;

          &:hover a,
          &:hover {
            color: $col-2;
            transition: 0.15s linear;
          }

          &:last-child {
            border: none;
          }

          a {
            color: $col-3;
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
        border: 1px solid $col-3;
        padding: 0 20px;
        cursor: pointer;

        &:hover {
          background-color: $bg-2;
          color: $col-1;
          transition: 0.2s linear;
        }
      }

      .fa-grip-lines {
        font-size: 2rem;
        display: none;
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

      .flex-block {
        .wrap-left {
          .dropdown {
            cursor: pointer;
            display: block;

            .dropdown-lang {
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}

@media all and (max-width: 900px) {
  header {
    .flex-block {
      .wrap-left {
        .menu-link {
          display: none;
        }

        h2 {
          font-size: 1.5rem;
          margin-left: 20px;
        }

        .dropdown {
          position: relative;
          right: 20px;
        }
      }

      .wrap-right {
        display: flex;
        align-items: center;
        gap: 50px;

        .bottone {
          display: none;
        }

        .social {
          display: none;
        }

        .fa-grip-lines {
          display: block;
          margin-right: 20px;
          color: $col-3;
          cursor: pointer;

          &:hover {
            color: $col-2;
            transition: 0.15s linear;
          }
        }
      }
    }
  }
}
</style>
