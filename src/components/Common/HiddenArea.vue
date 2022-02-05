<template>
  <div class="text-center">
    <q-expansion-item
      header-style="display: none"
      v-model="show"
    >
      <slot/>
    </q-expansion-item>
  </div>
</template>

<script>
    export default {
      props: ['show'],
    }
</script>

<style scoped>

</style>
