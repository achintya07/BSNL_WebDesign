<template>
  <div>
    <tab/>
    <v-row>
      <Breadcrumb/>
    </v-row>
    <v-content>    
      
      <v-container>
        <h1 class="heading"> CHECK LOCALITY </h1>
        
      </v-container>
      
      <Locality/>
        
    </v-content>
  </div>
</template>
<style>
/* Condition added which reduces the font size of h1 when screen size is lesser than 600px */
@media (max-width: 600px) {
  .heading {
    font-size: 24px;
  }
}
</style>

