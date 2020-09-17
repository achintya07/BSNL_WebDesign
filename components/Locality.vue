<template>
  <v-card 
  class="mx-auto"
  centered="true"
  width="1200px"
  height="250px"
  md="6">

  
  
    <v-card-title class="headline font-weight-regular blue-grey white--text">Check Locality 
    <v-col align="right" >
     <v-btn> Auto Detect </v-btn></v-col> </v-card-title>
    
    <br><br>
      <v-autocomplete
        v-model="model"
        :hint="!isEditing ? 'Type or Click Auto Detect' : 'Click the icon to save'"
        :items="states"
       
        :label="`Enter Locality/Address `"
        persistent-hint
        prepend-icon="mdi-city"
        
      >
        
          
          
      </v-autocomplete>
      
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        isEditing: false,
        model: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
      }
    },
  }
</script>

