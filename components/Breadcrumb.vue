<template>
  <div>
  <v-col cols="12" md="12" sm="12" >
    <v-breadcrumbs light :items="items"> <!--breadcrumbs added for navigation-->
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    </v-col>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: true,
          href: 'Default',
        },
        {
          text: 'Why Bharat Fiber?',
          disabled: false,
          href: 'Fiber',
        },
        {
          text: 'Check Locality',
          disabled: false,
          href: ' ',
        },
        
      ],
    }),
  }
</script>