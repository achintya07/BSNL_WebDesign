<template>   
  <v-container fluid> <!-- cards inside a container, confined space. Fluid improves the responsiveness of the container for different screen sizes-->
    <v-row dense> <!--dense decreases space between columns.-->
      <v-col
        v-for="card in cards"
        :key="card.title"
        cols="6"
        md="3"
        sm="3"
        lg="3"
        >
        <!--ForLoop used so that v-card need not be mentioned more than once.
        Columns occupied by each card mentioned for different screen sizes. 6 for extra-small, 3 for small,medium and large screens-->

        <v-card light class="mx-5" >
          <v-img
            :src="card.src"
            class="white--text align-end"
            light             
            >
            
          </v-img>        
        </v-card>
       
        <h2 class="font-weight-regular mt-4" align="center"  v-text="card.title"> </h2> 
      </v-col>
    </v-row>
  </v-container>
 
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Unlimited Bandwidth', src: 'cards-01.jpg' },
        { title: 'Home Optical Network', src: 'cards-02.jpg' },
        { title: '3 Days Power Backup', src: 'cards-03.jpg' },
        { title: '1 GBPS Speed', src: 'cards-04.jpg' },
      ],
    }),
  }
</script>