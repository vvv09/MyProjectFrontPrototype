<template>
  <header
    :class="dark ? 'bg-header-dark text-header-dark' : 'bg-header-light text-header-light'"
    class="q-header q-layout__section--marginal
         fixed-top q-header--bordered page-header
         absolute-top">
    <div
      class="q-toolbar row no-wrap items-center"
    >
      <slot name="buttons-left"/>
      <div
        class="q-pl-none q-toolbar__title ellipsis text-body1"
      >
        <slot name="title"/>
      </div>
      <slot name="buttons-right"/>
    </div>
  </header>
</template>

<script>
  export default {
    name: "PageHeader",
    computed: {
      dark: function () {
        return this.$q.dark.isActive
      }
    }
  }
</script>

<style scoped>

</style>
