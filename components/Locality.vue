<template>
  <!--component to show service is not available-->
  <div id="app">
    <!--card in which auto detect button and autocomplete text field is placed-->
    
    <v-container>
   
      <v-card 
        light
        class="mx-auto"
        centered="true"
        width="1200px"
        height="220px"
        >

      
        <v-row>
        <v-col cols="7" md="8" sm="8" >
            <v-card-title class=" font-weight-medium white blue--text mx-2">Enter Locality </v-card-title>
          </v-col>
          
          <v-col align="right" cols="5" md="4" sm="4" >

              <AutoDetect/>
          </v-col>
          
        </v-row>
      

    
      
        <v-row align="center" justify="start">
          <v-col cols="9" md="10" sm="10">
            <v-autocomplete
              v-model="model"
              dense
              :items="Available"
              
              :label="`Type address or AutoDetect`"
              persistent-hint
              prepend-icon="mdi-city"
              >     
            
          
            </v-autocomplete>
          </v-col>
          <v-col align="right">
            <v-btn
        
              color="primary" text
              @click="toggleAvail " 
              ><v-icon>mdi-magnify</v-icon>            
            </v-btn>              
          </v-col>                     
        </v-row> 

     
      </v-card>
  
    </v-container> 
    
    <v-row justify="center"> <!--justify is set to center so that Avail component is always on the center of the screen-->
      <v-col  cols="11" md="10" sm="10">
      <!--if condition to show availablity alert when seach/magnify button clicked-->
        <Avail class="mx-1"
            v-if="showAvail"/>
      </v-col>
    </v-row>
  
    <!--need to add if condition to the locality data so that correct availability status is showed -->  
  </div>
</template>

<script>
import Avail from './Avail.vue'

  export default {
    name: "App",
    components: {
      Avail,
    
      },
    data () {
      return {
        isEditing: false,
        model: null,
        showAvail: false,
        showNotAvail: false,
        Available:[ 
          'Telebhawan,Amravati', 'Savediexch,Amravati', 'MIDC,Amravati', 'Akoli,Amravati',
          'Badnera,Amravati', 'Navsari,Amravati', 'MainExchange,Amravati', 'RLUCAMP,Amravati',
          'Waluj,Amravati', 'Gharkheda,Amravati', 'Chikalthana,Amravati',
          '-Silkmillcolony,Amravati', 'Cantonment,Amravati', 'Wagholi,Pune', 'Vimannagar,Pune', 'Warje,Pune',
          'Pingalevasti,Pune', 'Bhosari,Pune', 'Baner,Pune', 'Aundh,Pune', 'Athashree,Pune',
          'Balewadi,Pune', 'Hingne,Pune', 'Kondhwa,Pune', 'Saoner tahsil ,Nagpur',
          'Mankapur,Nagpur', 'MIDC,Nagpur', 'IT city,Nagpur', 'Khamla,Nagpur',
          'Ramtek tahsil,Nagpur', 'Salunkya','Samratnagar', 'Gokulsirgaon',
          'Kagal,Kohlapur', 'Laxmipuri,Kohlapur', 'Tarabahi park,Kohlapur ', 'Shirouli,Kohlapur',
          'Jaysingpoor,Kohlapur', 'Dombivali,Kalyan', 'Ulhasnagar,Kalyan', 'Ambarnath,Kalyan',
          'Tarapur,Kalyan', 'Dombivali midc,Kalyan ', 'Khadakapda,Kalyan', 'Bhiwanadi,Kalyan', 'Saravali,Kalyan',
        ],
      }
    },
    methods: {
      toggleAvail(){
       
        this.showAvail = !this.showAvail
        
      },
      
     }
  }
</script>
<style>
@media (max-width: 601px) {
  .bruh {
    
    font-size: 24px;
  }
}
</style>

