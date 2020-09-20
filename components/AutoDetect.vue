<template>
   <div>
	<p>Lat = {{lat}} Lon ={{lon}}</p>
	<p>{{error}}</p>
	<v-btn color="primary" @click="myFunction()">Auto Detect</v-btn>
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