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
       
        >

      
        <v-row>
          <v-col cols="7" md="8" sm="8" >
            <v-card-title class=" font-weight-medium white blue--text mx-2"> <!--class is used to add CSS styles to component-->
             Enter Locality 
            </v-card-title>
          </v-col>
          
          <v-col align="right" cols="5" md="4" sm="4" >

        
            <v-btn  
              :disabled="isDisabled" 
              class="mr-4" 
              color="primary" 
              @click="myFunction()"
              >
              Auto Detect 
            </v-btn> 
      
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
         
            {{Available}}
            </v-autocomplete> 
          
          </v-col>
          <v-col align="right">
            <v-btn               
              color="primary" text
              @click="toggleAvail()" 
              :disabled="isDisabled"              
              >
              <!--when button is clicked, "toggleAvail" function is performed-->
              <!--button gets disabled after one click. This is due to the condition added to disabled attribute of button-->

              <v-icon>
               mdi-magnify
              </v-icon>            
            </v-btn>              
          </v-col>                     
        </v-row> 
        <v-row justify="center"> <!--justify is set to center so that Avail component is always on the center of the screen-->
      <v-col  cols="11" md="11" sm="11">
      
      <!--expand transition added to show alert (availablity status) -->
      <v-expand-transition>
        <Avail class="mx-1" v-if="showAvail"/>
            
        <NotAvail class="mx-1" v-if="showNotAvail"/> <!--if condition added so that when function is performed, then only component will appear-->
      </v-expand-transition>
      </v-col>
    </v-row>     
      </v-card>  
    </v-container> 
    
    
  
    <!--need to add if condition to the locality data so that correct availability status is showed -->  
  </div>
</template>

<script>
  import Avail from './Avail.vue'
  import NotAvail from './NotAvail.vue'
  export default {
    name: "App",
    components: {
      Avail,
      NotAvail,
    
      },
    data () {
      return {
        isEditing: false,
        model: null,
        items:[],
        search: null,
        showAvail: false,
        showNotAvail: false,
        Available:[ 
          'Telebhawan,Amravati', 'Savediexch,Amravati', 'MIDC,Amravati', 'Akoli,Amravati',
          'Badnera,Amravati', 'Navsari,Amravati', 'MainExchange,Amravati', 'RLUCAMP,Amravati',
          'Waluj,Amravati', 'Gharkheda,Amravati', 'Chikalthana,Amravati',
          'Silkmillcolony,Amravati', 'Cantonment,Amravati', 'Wagholi,Pune', 'Vimannagar,Pune', 'Warje,Pune',
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
      toggleAvail: function () {
      if (this.Available === "Telebhawan,Amravati") { 
          this.showAvail = !this.showAvail 
          this.isDisabled = true;} //enables button to get disabled after one click
      else 
      {this.showNotAvail = !this.showNotAvail
          this.isDisabled = true;}
      },
       myFunction: function () {		
        if(navigator.geolocation) //maps the location of user in terms of lat-long values
        {
        navigator.geolocation.getCurrentPosition(this.showPosition); //if it is able to get lat-long values of user, then it will perform showPostion function
        } else {
        this.error = "Geolocation is not supported."; //shows error if unable to get lat-long values
          
        }
      },
      showPosition:function (position) {       	
       
        if (position.coords.latitude > 18.89 && position.coords.latitude <19.31 && position.coords.longitude > 72.78 && position.coords.longitude < 73.08 )
          //if user is in Navi Mumbai or Mumbai, then alert will show "Service is Available. Else it will show "Not Available"
          // && makes sure that all conditions should be met 
          //position.coords.latitude is the value of latitude where user is living

        {
          this.showAvail = !this.showAvail;
          this.isDisabled = true;}
        else {
          this.showNotAvail = !this.showNotAvail;
          this.isDisabled = true;}
      }
     }
  }
</script>

