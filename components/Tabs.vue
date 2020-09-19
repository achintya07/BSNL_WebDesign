<template>
<v-card flat>
  <v-tabs
  background-color="white"
    color="blue"
    md="4"
    sm="2"
    xs="2"> 

    <v-tab
        v-for="item in items"
        :key="item.tab"
      >
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item.tab"
      >
        <v-card flat>
        
  <v-btn text> Why Bharat Fiber? </v-btn>
  <v-btn text> Check Locality </v-btn>
  <v-btn text> View Plans </v-btn>
 
        </v-card>
      </v-tab-item>
    </v-tabs-items>

<!--  
    <v-tab >Home</v-tab>
    <v-tab >PREPAID</v-tab>
    <v-tab> POSTPAID</v-tab>
    <v-tab>FIBER & WIFI</v-tab>
    <v-tab>CUSTOMIZE NUMBER</v-tab> 

<v-spacer></v-spacer>
<v-col  md="2"
sm="2"
xs="2" >

          <v-text-field centered="false"
            hide-details 
            label="Filled" 
            placeholder="Search" 
            filled 
            rounded 
            dense 
            single-line 
            append-icon="mdi-magnify" class="shrink">
            
      </v-text-field>
     
     </v-col> -->
    
  </v-tabs>
  </v-card>
  </template> 
  
  <script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'One', content: 'Tab 1 Content' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          
        ],
      }
    },
  }
</script>