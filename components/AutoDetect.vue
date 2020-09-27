<template>
  <div>
    <v-row justify="end">
      <p class="mr-4">Lat = {{lat}} Lon ={{lon}}</p> <!--displays longitude and latitude, need to convert this data to a location-->
      <p>{{error}}</p>
    </v-row>
    <v-row justify="end">
      <v-btn class="mr-4" color="primary" @click="myFunction()">Auto Detect 
      </v-btn> 
    </v-row>
  </div>
</template>
<script>
   export default {
     data() { 
       return {
         lat:0,
         lon:0,
         
       };
     },
     methods: {
      myFunction: function () {		
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.showPosition);
        }else{
        this.error = "Geolocation is not supported."; 
          
        }
      },
      showPosition:function (position) {	
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      }
    }

    
  }
</script>