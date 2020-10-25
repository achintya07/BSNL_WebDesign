<template>
  <div>
 
    <v-row align="center">
      <!--alert to show service is available-->
      <v-alert
        :value="alert"
        class="mx-auto"
        width="1160px"
        dense
        light
        outlined
        prominent     
        type="success"
        > 
        <!--prominent attribute displays a larger icon-->
        <!--type attribute enables to show a type of alert since there are predefined alerts--> 
        <v-row align="center">
          <v-col> 
           <strong style="color:Green">Service Available</strong> <!--strong makes the text bold-->
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