<template>
  <div> 
      
    <v-alert
      class="mx-auto"
      width="1200px"
      transition="scale-transition"
      outlined
      dense
      prominent     
      type="error"
      >
        <v-row>
          <v-col class="grow"><b>Service Not Available</b> <br>Sorry! Bharat Fiber is not available in your locality
          </v-col>        
                      
          <v-col align="right">
          <Popup/>
          </v-col>
        
        </v-row>
    </v-alert>
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