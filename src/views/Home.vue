<template>
  <div id="home">
    <about />

    <subscribe />

    <social />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
    },
  }
</script>
