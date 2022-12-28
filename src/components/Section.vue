<script >






export default {

    name: "Section",
    
    data() {
        return {
          image:"https://www.banjakulasi.com/upload/iblock/444/44490b83e05d715f833a6fea6cb76209.jpg",
          text:" A noble but severely ill horse was wandering for weeks and months in the unexplored countryside and finally dropped from exhaustion. He fell into a deep water-hole with a spouting spring. The water in the spring turned out to be healing, the horse recovered in three days and gained strength as if he had never been sick",
          author:"Raiko Spasoevich, Tesan"
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
        <div>
           <img :src="image" alt="">
        </div>
        <div class="title-position">
           <h2>
               Legend
               of Kulasi
               
           </h2>
           <p>
            {{ text }}
           </p>
           <h3>
            {{ author }}
           </h3>
        </div>
           
       </div>
 </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

.container {
    padding-top: 140px;
    height: 945px;
    display: flex;
    

    img {
        
        height: 900px;
        max-width: 1090px;

    }
    .title-position{
       p{
        padding: 15px;
        font-size: 23px;
       }
       h3{
        padding: 15px;
        font-size: 2rem;
       }
    }
   
    





    h2 {
        font-size: 7rem;
        position: relative;
        right: 92px;
      
    }
}

@media all and (max-width: 1250px) {
   
   
}

@media all and (max-width: 1000px) {
   
}

@media all and (max-width: 900px) {}
</style>