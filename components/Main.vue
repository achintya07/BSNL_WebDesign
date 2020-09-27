<template>
  <div>
    <!--main tabs-->
    <v-row dense>
    <v-tabs
      v-model="tab"
      light
      background-color="white"
      color="blue darken-3"
      class=" mb-2 ml-md-5 d-none d-sm-flex"
     
      >
        <!--for loop used so that there are multiple tabs and information in each tab is different-->
        <v-tab 
        class="d-none d-sm-flex"
          v-for="item in items"
          :key="item.tab"
          >
          {{ item.tab }}
        </v-tab>
    </v-tabs>


    <v-tabs-items light class="d-none d-sm-flex" v-model="tab">
      <v-tab-item 
     
        v-for="item in items"
        :key="item.tab"
        >

        <v-row dense>
        <v-col cols="12" md="12" sm="12">
          <v-card dense  class="mx-1" color="blue"  flat tile>
            <!--subtabs in form of buttons-->
         
             
            <v-btn  text>{{item.button}}  </v-btn>
            <v-btn  text>{{item.button1}} </v-btn>
            <v-btn  text>{{item.button2}} </v-btn>
                  
            <v-btn  text>{{item.button3}} </v-btn> 
            <v-btn  text>{{item.button4}} </v-btn>
            <v-btn  text>{{item.button5}} </v-btn>
            
           
              
          </v-card> 
          </v-col>
       </v-row>
      </v-tab-item>
    </v-tabs-items>
   </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
   
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