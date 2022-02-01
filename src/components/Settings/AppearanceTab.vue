<template>
  <page-frame>
    <page-block-title>Appearance</page-block-title>
    <appearance />
  </page-frame>
</template>

<script>
    export default {
      name: "AppearanceTab",
      components: {
        'appearance': require('components/Settings/Appearance/Appearance').default,
      },
    }
</script>

<style scoped>

</style>
