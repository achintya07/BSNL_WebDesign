<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
   
    
   
    
    <v-card dense color="white" light tile> 
   
         
      <v-row dense align="center" class="mx-1">  
         
        <v-col offset="5" offset-md="0" offset-sm="0" md="1" cols="1"> 
          <logo/> 
        </v-col> 

        <v-spacer></v-spacer> <!--adds space between two components within a row and between columns-->

        <v-col  md="2" sm="3" cols="4" class="ml-10 mt-4">
          <Search/>
        </v-col>
        
        <v-col class="mr-1 mt-4" md="2" sm="2" cols="12">
          <Chips/> 
        </v-col>
      </v-row>
      
      <v-row dense>
        <v-col md="12" sm="12"> 
         <tabs/> 
        </v-col> 
      </v-row>
     
       
    </v-card>


    <!-- Body -->
    
    <v-content light>
      <drawer/>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
      
    <v-footer class="mx-auto" color="blue darken-3" app> <!-- mx-auto, i.e. margin towards left and right. "Auto" sets the margin size automatically -->
      <v-row dense justify="center">
        <v-col align="center" cols="12" md="12" sm="12"> <!-- footer covers 12 columns on all screens-->
          <v-btn  class="text-md-button text-sm-button text-overline" text> Home </v-btn> <!-- text style is "button" on medium and small screens while it is "overline" on extra-small (mobile) screens-->
          <v-btn  class="text-md-button text-sm-button text-overline" text> Sitemap </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Prepaid</v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Postpaid </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Fiber & Wifi </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Customize Number </v-btn> 
        </v-col>
      </v-row>
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