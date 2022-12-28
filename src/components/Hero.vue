<script >
import { objectToString } from '@vue/shared';
import 'animate.css';





export default {

    name: "Hero",
    props: {
        data: Object,
    },
    data() {
        return {
            activeItem: 0,
            myInterval: "",
        }
    }, methods: {
        nextImg() {
            this.activeItem++
            if (this.activeItem >= this.data.heroImgs.length) {
                this.activeItem = 0
            }
        },
        autoPlay() {
            this.myInterval = setInterval(this.nextImg, 3000)
        },
    },
    mounted() {
        this.autoPlay()
    }

}
</script>

<template>
    <div class="container">
        <div class="container-img" v-for="img in data.heroImgs" :key="img.name" v-show="img.id === activeItem">
            <img class="animate__animated  animate__fadeIn" :src="img.scr" :alt="img.name">
        </div>
        <div class="title">
            <h1 class="animate__animated  animate__fadeInLeft">VILLA <br> SILENZIOSA</h1>
            <h3 class="animate__animated  animate__fadeInLeft">TRASCORRI LE TUE NOTTI NEL CUORE DEL CILENTO, A DUE PASSI
                DAL MARE. </h3>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    padding-top: 124px;
    height: 875px;
    display: flex;
    justify-content: end;

    .container-img {
        position: relative;
        width: 80%;

        img {
            filter: contrast(70%);
            position: absolute;
            height: 100%;
            width: 100%;
            right: 0;
        }
    }

    .animate__animated.animate__fadeIn {
        --animate-duration: 2s;
        transition-delay: 5s;
    }

    .title {
        position: absolute;
        left: 250px;
        top: 250px;

        h1 {
            font-size: 8rem;
            margin-bottom: 75px;
        }
    }

}

@media all and (max-width: 1440px) {



    .container {
        .container-img {
            width: 72%;
        }

        .title {

            top: 300px;

            h1 {
                font-size: 6.5rem;
                margin-bottom: 30px;

            }
        }
    }
}

@media all and (max-width: 1250px) {


    .container {
        height: 780px;

        .title {
            top: 240px;
            left: 80px;
        }


        .container-img {
            img {
                object-fit: cover;
            }
        }
    }
}

@media all and (max-width: 900px) {
    .container {
        height: 825px;

        .container-img {
            width: 80%;
        }

        .title {
            top: 270px;
            left: 40px;

            h1 {
                font-size: 4rem;

            }

            h3 {
                font-size: 1rem;
            }
        }


    }

}


@media all and (max-width: 450px) {
    .container {
        .title {
            h1 {
                font-size: 2rem;

            }

            h3 {
                font-size: 0.8rem;
                width: 80%;
            }
        }

    }

}
</style>