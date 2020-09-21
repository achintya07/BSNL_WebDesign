<template>
  <!--component to show service is not available-->
  <div id="app">
    <!--card in which auto detect button and autocomplete text field is placed-->
    <v-flex  md="6" xs="12" sm="6" offset-sm="3">
    <v-card 
      light
      class="mx-auto"
      centered="true"
      width="1200px"
      height="220px"
      md="6"
      sm="4"
      xs="4">

    
    
      <v-card-title class="headline font-weight-medium white blue--text">Enter Locality 
        <v-col align="right">

          <AutoDetect/>
        </v-col>
      </v-card-title>
      
      
      <v-row align="center" justify="start">
        <v-col md="11">
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
            @click="toggleAvail"
            ><v-icon>mdi-magnify</v-icon>            
          </v-btn>              
        </v-col>                     
      </v-row> 
                
      
    </v-card>
    </v-flex>
    <!--if condition to show availablity alert when seach/magnify button clicked-->
    <Avail 
        v-if="showAvail"/>
    <!--need to add if condition to the locality data so that correct availability status is showed -->  
 </div>
</template>

<script>
import Avail from './Avail.vue'
  export default {
    name: "App",
    components: {
      Avail
      },
    data () {
      return {
        isEditing: false,
        model: null,
        showAvail: false,
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
        
        this.showAvail = !this.showAvail;
       
      },
     }
  }
</script>

