<template>
  <q-card
    :class="'bg-' + session.practiceType + '-5'"
    @click="$router.push(`/diary/${session.id}`)" >
    <q-card-section class="q-mb-sm">
      <div class="row">
        <div class="col-10">
          <div class="text-h6">{{ session.practiceName }}</div>
          <div class="text-h5">{{ session.title }}</div>
        </div>
        <div class="col-2">
          <q-icon size="62px" name="trending_up"/>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
  export default {
    props: ['session'],
  }
</script>

<style scoped>

</style>
