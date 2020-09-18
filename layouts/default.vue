<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
    <v-app-bar color="white" light 
    md="4"
    sm="4"
    xs="2">
   
      <v-toolbar-title></v-toolbar-title>
       
       <logo/>
       
       
       <!-- Component Example -->
                    
       <Tabs/>
    </v-app-bar>

    <!-- Body -->
    <v-content light>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
    <v-footer color="indigo" app>
    
      <span class="white--text">&copy; {{ new Date().getFullYear() }} </span>
      <Footer/>
    </v-footer>

  </v-app>
</template>

<script>
export default {}
</script>

<style> 
  .white--text {
    border: 1px solid;
  }

  /* #inspire {
    background-color: white;
    color: black;
  }*/
</style>