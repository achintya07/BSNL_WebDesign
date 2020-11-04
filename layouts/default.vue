<template>
  <!--Your App Starts Here -->
  <v-app id="inspire">
    
    <!--Header -->
  

    


    <!--Hamburger menu dropdown for sm and xs screens -->

<v-card dense color="white" light tile> 
   
         
      <v-row dense align="center" class="mx-1">  
          
          <v-col  class="mt-2" md="1" cols="1"> 
            <logo/> 
            
          </v-col>
          <v-col offset="3" offset-md="0" offset-sm="0" cols="5" class=" mt-4  d-flex d-sm-none">
            <Search/>
          </v-col> 

        <v-row justify="end">
          <v-btn        
            class=" ml-10 mt-4 d-flex d-sm-none"         
            color="white"
            depressed
            @click.stop="drawer = !drawer"
            > <!--navigation drawer can be opened and closed with a click-->
            <v-icon>
            mdi-menu 
            </v-icon>
            
          </v-btn>
        </v-row>
          <v-spacer></v-spacer> <!--adds space between two components within a row and between columns-->

          <v-col  md="2" sm="3" cols="4" class="ml-10 mt-4 d-none d-sm-flex">
            <Search/>
          </v-col>          
          
          <v-col  md="2" sm="3" cols="4" class="mt-4">
            <Chips/>
          </v-col>
      </v-row>
      
      <v-row dense>
        <v-col md="12" sm="12"> 
         <tabs/> 
        </v-col> 
      </v-row>
     
    
    </v-card>
    







    </v-menu>
    <div class="mx-4 hidden-sm-and-down"></div>
    </v-row>
    
    

    <!-- Body -->
    
    <v-content light>
       <v-navigation-drawer
        v-model="drawer"
        absolute
        light
        temporary
        class=" d-flex d-sm-none"
      > <!--temporary attribute enables the drawer to slide in over the existing webpage with an overlay-->
      

      <v-expansion-panels> <!--expansion panel is an accordian, multiple drop downs with some content-->
        <v-expansion-panel
          v-for="item in items"
          :key="item.panel"
          >
          <!--ForLoop used to have multiple expansion-panels-->

          <v-expansion-panel-header> <!--title/header of the expansion panel-->
          {{item.panel}}
          </v-expansion-panel-header> 

          <v-expansion-panel-content> <!--content inside the expansion panel-->
            <v-btn text>{{item.button}} </v-btn>
            <v-btn text>{{item.button1}} </v-btn>
            <v-btn text>{{item.button2}} </v-btn>
                  
            <v-btn text>{{item.button3}} </v-btn> 
            <v-btn text>{{item.button4}} </v-btn>
            <v-btn text>{{item.button5}} </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

          
    </v-navigation-drawer>
      <nuxt /> 
    </v-content>
    
    <!-- Footer -->
      
    <v-footer class="mx-auto" color="blue darken-3" app> <!-- mx-auto, i.e. margin towards left and right. "Auto" sets the margin size automatically -->
      <v-row dense justify="center">
        <v-col align="center" cols="12" md="12" sm="12"> <!-- footer covers 12 columns on all screens-->
          <v-btn  class="text-md-button text-sm-button text-overline" text> Home </v-btn> <!-- text style is "button" on medium and small screens while it is "overline" on extra-small (mobile) screens-->
          <v-btn  class="text-md-button text-sm-button text-overline" text> Sitemap </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Prepaid</v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Postpaid </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Fiber & Wifi </v-btn>
          <v-btn  class="text-md-button text-sm-button text-overline" text> Customize Number </v-btn> 
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          {panel:'PREPAID', button: 'Recharge', button1:'Prepaid to Postpaid',button2:'Roaming',button3: 'International Roaming', button4:'Upgrade',button5:'View Plans '},
          {panel:'POSTPAID', button: 'Pay Bills', button1:'Roaming',button2:'International Roaming', button3: 'View Plans' },
          {panel:'FIBER & WIFI', button: 'Bharat Fiber',  button1:'Broadband',button2:'Wi-Max'},
          {panel:'CUSTOMIZE NUMBER', button: 'Vanity Numbers', button1:'Fancy Numbers',button2:'Choose Mobile Number'},
          
        ],
      }
    },
  }
</script>

<style> 

  .white--text {
    border: 1px solid;
  }

   #inspire {
    background-color: white;
    color: black;
  }
</style>