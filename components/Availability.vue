<template>
  <div>
      <v-btn
        color="primary" text
        @click="alert = !alert"
      ><v-icon>mdi-magnify</v-icon>
        
      </v-btn>
 
 
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
 </div>
</template>
    <script>
    
  export default {
    data () {
      return {
        alert: false,
        
      }
    },
  }
</script>