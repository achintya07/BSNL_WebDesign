<template>
  <div>
  <v-row mt="10" justify="center">
   <span class="text-h1"> BHARAT FIBER </span></v-row>
   <v-col offset="1" cols="10">
   <blockquote class="blockquote" align="center"> Bharat Fiber (FTTH) is a unique technology being deployed by BSNL for the first time in India. The fiber connectivity having unlimited bandwidth and state of the art technology provides fix access platform to deliver the high speed broadband from 256 Kbps to 1000 Mbps
  </blockquote></v-col>
  <v-row justify="center">
  <v-col
          v-for="card in cards"
          :key="card.title"
          md="3"
          sm="6"
          xs="2"
          class="mx-auto"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end rounded-md"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            
          </v-card></v-col></v-row>
  </div>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg' },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        
      ],
    }),
  }
</script>