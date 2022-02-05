<template>
  <q-btn
    v-if="getMobileDiaryPageState == 'practices'"
    icon="las la-feather-alt"
    @click="setMobileDiaryPageState('diary')"
    color="primary"
    rounded
    dense
    flat
    no-caps
  />
  <q-btn
    v-if="getMobileDiaryPageState == 'diary'"
    icon="las la-magic"
    @click="setMobileDiaryPageState('practices')"
    color="primary"
    rounded
    dense
    flat
    no-caps
  />
</template>

<script>

  import {mapGetters, mapMutations} from "vuex"

  export default {
    computed: {
      ...mapGetters('application', ['getMobileDiaryPageState']),
    },
    methods: {
      ...mapMutations('application', ['setMobileDiaryPageState']),
    }
  }
</script>

<style scoped>

</style>
