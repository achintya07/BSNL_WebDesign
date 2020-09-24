<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
   
    
     
    
    <v-card dense color="white" light tile> 
         
          <v-row dense align="center" class="mx-4">  
         
       <logo/> <v-col md="8" sm="6" xs="6" class="mx-4"> <Main/> </v-col>  <v-col class="mx-4" align="right" ><Search/></v-col> <v-col> <Chips/> </v-col>
       
       
              
      <v-spacer></v-spacer>
       </v-row>
    </v-card>
    </v-col>

    <!-- Body -->
    
    <v-content light>
   
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
    
    <v-footer color="blue darken-3" app>
    
      
      <Footer/>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
@media (max-width: 960px){

}
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
    color: black;
  }
</style>