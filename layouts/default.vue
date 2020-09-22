<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-card dense color="white" light tile="true"
    md="4"
    sm="4"
    xs="2">
   
      <v-row dense align="center" class="mx-auto">   
      <v-col>    
       <logo/></v-col> <v-col offset="6" md="2" align="right" ><Search/></v-col> <v-col><Chips/> </v-col>
       
       
                 
      <v-spacer></v-spacer>
       </v-row>
    </v-card>

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
  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
    color: black;
  }
</style>