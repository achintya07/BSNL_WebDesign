<template>
  <div>
    <!--main tabs-->
    <v-tabs
      v-model="tab"
      light
      background-color="white"
      color="blue darken-3"
      class="d-none d-md-flex d-lg-flex"
      md="4"
      sm="2"
      xs="2"
      >
        <!--for loop used so that there are multiple tabs and information in each tab is different-->
        <v-tab 
         class="d-none d-md-flex d-lg-flex"
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
        tab: null
        ,
        items: [
          { tab: 'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans ' },
          { tab: 'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          { tab: 'FIBER & WIFI', button: 'Broadband', button1:'Bharat Fiber',button2:'Wi-Max'},
          { tab: 'CUSTOMIZE NUMBER', button: 'Vanity Numbers?', button1:'Fancy Numbers',button2:'Choose your Mobile Number'},
          
        ],
      }
    },
  }
</script>