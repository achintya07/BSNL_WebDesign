<template>
  <div>
     <v-row justify="end">
        <v-btn
         class=" d-sm-flex d-md-none"
          color="blue"
          dark
          @click.stop="drawer = !drawer"
        ><v-icon> mdi-burger </v-icon>
          
        </v-btn>
      </v-row>
   

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class=" d-sm-flex d-md-none"
    >
     

  <v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 5"
      :key="i"
    >
      <v-expansion-panel-header>Item</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

        
    </v-navigation-drawer>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
      }
    },
  }
</script>
