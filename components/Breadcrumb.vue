<template>
  <div>
    <v-breadcrumbs light :items="items">
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
          text: 'Why Bharat Fiber?',
          disabled: false,
          href: 'Default',
        },
        {
          text: 'Check Locality',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        
      ],
    }),
  }
</script>