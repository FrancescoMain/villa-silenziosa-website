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
        <div v-for="img in data.heroImgs" :key="img.name" v-show="img.id === activeItem">
            <img class="animate__animated  animate__fadeIn" :src="img.scr" :alt="img.name">
        </div>
        <h1 class="animate__animated  animate__fadeInLeft">VILLA <br> SILENZIOSA</h1>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    padding-top: 140px;
    height: 945px;
    display: flex;
    justify-content: end;

    img {
        filter: grayscale(0.7);
        max-height: 820px;
        max-width: 1090px;
    }



    .animate__animated.animate__fadeIn {
        --animate-duration: 2s;
        transition-delay: 5s;
    }

    h1 {
        font-size: 8rem;
        position: absolute;
        left: 150px;
        top: 300px;
    }
}

@media all and (max-width: 1250px) {


    .container {
        h1 {
            left: 24px;
        }
    }
}


@media all and (max-width: 900px) {
    .container {
        h1 {
            font-size: 4.5rem;
            text-align: center;
            width: 100%;
            left: 0px;
        }
    }
}

@media all and (max-width: 450px) {
    .container {
        h1 {
            font-size: 3rem;
            text-align: center;
            width: 100%;
            left: 0px;
        }
    }
}
</style>