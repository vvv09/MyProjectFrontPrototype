<template>
  <q-list
    :class="dark ? 'bg-item-dark text-item-dark' : 'bg-item-light text-item-light'"
  >
    <slot />
  </q-list>
</template>

<script>
  export default {
    name: "PageList",
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
  }
</script>

<style scoped>

</style>
