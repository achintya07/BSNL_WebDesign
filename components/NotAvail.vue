<template>
  <div> 
      <!--alert to show service is not available-->
    <v-row align="center">
      <v-alert
        class="mx-auto"
        width="1160px"     
        outlined
        dense
        prominent     
        type="error"
        >
        <!--prominent attribute displays a larger icon-->
        <!--type attribute enables to show a type of alert since there are predefined alerts--> 
        <v-row align="center">

          <v-col class="grow">
            <b>Service Not Available</b> 
            <br>Sorry! Bharat Fiber is not available in your locality
          </v-col>        
                      
          <v-col align="right">
            <Popup/> <!--receive updates form-->
          </v-col>
      
        </v-row>
      </v-alert>
    </v-row>
  </div>
</template>

<script>
    
  export default {
    data () {
      return {
        alert: true,
        
      }
    },
  }
</script>