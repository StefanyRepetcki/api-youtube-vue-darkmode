<template>
  <v-app>
    <core-app-bar />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    name: 'App',

    components: {
      CoreFooter: () => import('@/components/core/Footer'),
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreView: () => import('@/components/core/View'),
    },
  }
</script>
