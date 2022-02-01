<template>
  <h6
    class="q-mb-xs q-mt-md q-ml-xs"
    :class="dark ? 'bg-page-dark text-page-dark' : 'bg-page-light text-page-light'"
  >
    <slot />
  </h6>
</template>

<script>
  export default {
    name: "PageBlockTitle",
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
  }
</script>

<style scoped>

</style>
