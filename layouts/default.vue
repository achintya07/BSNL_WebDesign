<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-card color="white" light tile="true"
    md="4"
    sm="4"
    xs="2">
   
      <v-row align="center" class="mx-auto">   
      <v-col md="1" >    
       <logo/></v-col>
       
       
       <!-- Component Example -->
                  
       <Main/> <v-spacer></v-spacer>
       <v-col  md="2" align="right" ><Search/> </v-col> </v-row>
    </v-card>

    <!-- Body -->
    <v-content light>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
    <v-footer color="blue" app>
    
      <span class="white--text">&copy; {{ new Date().getFullYear() }} </span>
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