<template>
  <v-card md="6">
    <v-card-title class="headline font-weight-regular blue-grey white--text">Check Locality</v-card-title>
    <v-card-text>
      <v-subheader class="pa-0">Enter Locality/Address</v-subheader>
      <v-autocomplete
        v-model="model"
        :hint="!isEditing ? 'Type or Click Auto Detect' : 'Click the icon to save'"
        :items="states"
        
        :label="`Enter Locality/Address `"
        persistent-hint
        prepend-icon="mdi-city"
      >
        
          
          
      </v-autocomplete>
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