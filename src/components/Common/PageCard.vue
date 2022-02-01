<template>
  <q-card
    :class="dark ? 'bg-item-dark text-item-dark' : 'bg-item-light text-item-light'"
    flat
    bordered
  >
    <slot />
  </q-card>
</template>

<script>
  export default {
    name: "PageCard",
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
  }
</script>

<style scoped>

</style>
