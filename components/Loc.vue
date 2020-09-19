<template>
   <div>
	<p>Lat = {{lat}} Lon ={{lon}}</p>
	<p>{{error}}</p>
	<v-btn @click="myFunction()">Click Me</v-btn>
</div>
</template>
<script>
   export default {
     data() {
       return {
         address: "",
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