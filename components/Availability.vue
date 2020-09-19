<template>
  <div><v-row>
  <v-col align="right">
      <v-btn
        color="primary" text
       
      ><v-icon>mdi-magnify</v-icon>
        
      </v-btn></v-col></v-row>
 
 <v-row>
    <v-alert
    :value="alert"
      class="mx-auto"
      width="1200px"
      transition="scale-transition"
      outlined
      prominent     
      type="success"
    >
      <v-row>
        <v-col class="grow"><b>Service Available</b> <br>Yay! You can register for Bharat Fiber
        </v-col>   
      
      
            
      <v-col align="right">
        <v-btn
          color="primary"
          dark
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