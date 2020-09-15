<template>
  <div>
    <v-alert
    class="mx-auto"
    width="1200px"
    transition="scale-transition"
    outlined
    prominent     
      type="success"
    >
      <v-row align="center">
        <v-col class="grow"><b>Service Available</b> <br>Yay! You can register for Bharat Fiber
        </v-col>
        <v-col class="shrink">
          <v-btn>VIEW PLANS</v-btn>
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