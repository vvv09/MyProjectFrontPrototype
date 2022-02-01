<template>
  <q-tab-panels
    animated
    :class="dark ? 'bg-page-dark text-page-dark' : 'bg-page-light text-page-light'"
  >
    <slot />
  </q-tab-panels>
</template>

<script>
  export default {
    name: "PageTabPanels",
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
  }
</script>

<style scoped>

</style>
