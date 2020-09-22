<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              
            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { icon: "home", title: "Link A" },
        { icon: "info", title: "Link B" },
        { icon: "warning", title: "Link C" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    }
  }
};
</script>
