<template>
  <div>
    <!--main tabs-->
    <v-tabs
      v-model="tab"
      light
      background-color="white"
      color="blue darken-3"
      class=" d-none d-sm-flex"
      >
        <!--for loop used so that there are multiple tabs and information in each tab is different-->
        <!-- d-none d-sm-flex means that tabs will be visible on all screens except extra-small (mobile) screens -->
        <!-- key is a tag name for the data entered in script-->
        <v-tab 
         class="d-none d-sm-flex" 
          v-for="item in items"
          :key="item.tab"
          >
          {{ item.tab }}
        </v-tab>
    </v-tabs>


    
   
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        
        items: [
          { tab: 'PREPAID'},
          { tab: 'POSTPAID'},
          { tab: 'FIBER & WIFI'},
          { tab: 'CUSTOMIZE NUMBER'},
          
        ],
      }
    },
  }
</script>