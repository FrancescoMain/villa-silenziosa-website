<script >
</script>

<template>
  <header>
    <div class="container">
      <div class="flex-block">
        <div class="wrap-left">
          <!-- bottone menu  -->
          <a class="menu-link" href="#">MENU</a>
          <!-- TITOLO  -->
          <h2>VILLA SILENZIOSA</h2>
          <div class="dropdown">
            <a class="dropdown-lang" href="">ITA</a>
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </div>
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
          <ul class="social">
            <li>
              <a class="icon" href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </li>
            <li>
              <a class="icon" href=""><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            </li>
          </ul>
          <font-awesome-icon icon="fa-solid fa-grip-lines" />
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

      .dropdown {
        display: none;
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

      .fa-grip-lines {
        font-size: 1.4rem;
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
          font-size: 1rem;
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
        }
      }
    }
  }
}
</style>
