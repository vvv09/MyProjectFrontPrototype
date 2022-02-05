<template>
    <div>
      <q-editor v-model="editor" min-height="5rem" />
    </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    setup () {
      return {
        editor: ref('What you see is <b>what</b> you get.')
      }
    }
  }
</script>

<style scoped>

</style>
