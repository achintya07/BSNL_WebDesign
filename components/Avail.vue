<template>
  <div>
 
    <v-row align="center">
      <!--alert to show service is available-->
      <v-alert
        :value="alert"
        class="mx-auto"
        width="1160px"
        transition="scale-transition"
        dense
        light
        outlined
        prominent     
        type="success"
        > 
        <v-row align="center">
          <v-col class="grow"> <strong style="color:Green">Service Available</strong>
           <p style="color:Green"> Yay! You can register for Bharat Fiber</p> <!--green colour changed so that font readable-->
          </v-col>          
                     
          <v-col align="right">
            <v-btn
              color="primary"
              light
              outlined
              >
              View Plans
            </v-btn>
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