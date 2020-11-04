<template>
  <!--popup form to receive updates-->
  <v-row justify="end"> <!--"receive button aligned towards the end column-->
    <v-dialog light v-model="dialog"  max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-col class="d-none d-sm-flex" offset="7" align="right">
          <v-btn
            color="primary"
            outlined
            v-bind="attrs"
            v-on="on"
            >
            Receive Updates
          </v-btn> 
        </v-col>
          <v-col class="d-flex d-sm-none" offset="1" align="right">
          <v-btn
            color="primary"
            outlined
            v-bind="attrs"
            v-on="on"
            >
            Receive <br>
            Updates
          </v-btn> 
        </v-col>
      </template>
      <v-card>
        <v-card-title>
          RECEIVE UPDATES
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <!--required used so that for text fields which are neccessary to fill, denoted with a star-->
                <v-text-field label="Name*" required></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field label="Contact Number*" required></v-text-field>  <!--label attribute acts as a header telling the user what detail needs to be entered-->
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email"></v-text-field>
              </v-col>             
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          
          <v-col align="left">
            <v-btn color="blue darken-3" light @click="dialog = false">SUBMIT</v-btn> <!--false makes sure that dialog box does not open when webpage is loaded-->
            <v-btn color="blue darken-3" text @click="dialog = false">CANCEL</v-btn> 
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>