<template lang="pug">  
  #app
    .header
      app-header
    .tabs
      tabs
    .content
      router-view
</template>

<script>
  export default {
      components: {
          appHeader: require('./components/header'),
          tabs: require('./components/tabs')
      }
  }

</script>

<style lang="scss">

</style>
