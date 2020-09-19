<template>
  <div>
        <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: 'Default',
        },
        {
          text: 'Fiber & WiFi',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Check Locality',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>