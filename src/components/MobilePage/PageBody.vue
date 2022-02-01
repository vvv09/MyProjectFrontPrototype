<template>
  <q-scroll-area
    :class="dark ? 'bg-page-dark text-page-dark' : 'bg-page-light text-page-light'"
    class="page-body absolute-top fit">
    <div class="page-body-spacer-header"></div>
    <slot/>
    <div class="page-body-spacer-footer"></div>
  </q-scroll-area>
</template>

<script>
  export default {
    name: "PageBody",
    computed: {
      dark: function () {
        return this.$q.dark.isActive
      }
    },
  }
</script>

<style scoped>

</style>
