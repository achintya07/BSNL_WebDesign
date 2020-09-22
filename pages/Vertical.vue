<template>
  <div>
    <v-container
      v-for="align in alignments"
      :key="align"
      class="grey lighten-5 mb-6"
    >
      <v-row
        :align="align"
        no-gutters
        style="height: 150px;"
      >
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        sm="4"
        xs="4"
        >
          <v-card
            class="pa-2 mx-md-2 mx-sm-2 mx-xs-2 pa-3"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="grey lighten-5 mx-md-2 mx-sm-2 mx-xs-2 pa-3">
      <v-row
        no-gutters
        style="height: 150px;"
        
      >
        <v-col
          v-for="align in alignments"
          :key="align"
          :align-self="align"
          cols="12"
         md="4"
        sm="4"
        xs="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>