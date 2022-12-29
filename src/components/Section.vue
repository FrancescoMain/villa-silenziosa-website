<script >


export default {

    name: "Section",
    props: {
        data: Object,
    },
    data() {
        return {
            image: "https://www.banjakulasi.com/upload/iblock/444/44490b83e05d715f833a6fea6cb76209.jpg",
            text: " A noble but severely ill horse was wandering for weeks and months in the unexplored countryside and finally dropped from exhaustion. He fell into a deep water-hole with a spouting spring. The water in the spring turned out to be healing, the horse recovered in three days and gained strength as if he had never been sick",
            author: "Raiko Spasoevich, Tesan"
        }
    }, methods: {


    },
    mounted() {

    }

}
</script>

<template>
    <section>
        <div class="container">
            <div class="container-img">
                <img :src="data.imgSection" alt="">
            </div>
            <div class="title-position">
                <h2>
                    MARINA DI <br> CASAL VELINO
                </h2>
                <p>
                    {{ text }}
                </p>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    height: 755px;
    display: flex;

    .container-img {
        width: 165%;

        img {
            width: 100%;
            height: 100%;
        }
    }


    .title-position {
        margin-top: 130px;

        p {
            padding: 15px;
            font-size: 23px;
            margin-top: 30px;
            width: 60%;
            margin-left: 55px;
        }


    }

    h2 {
        font-size: 5.5rem;
        position: relative;
        right: 50px;


    }
}

@media all and (max-width: 1250px) {}

@media all and (max-width: 1000px) {}

@media all and (max-width: 900px) {}
</style>