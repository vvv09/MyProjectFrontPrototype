<template>
  <mobile-page>
    <mobile-page-header>
      <template #title>Correspondences</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="q-pa-lg">

        <div class="text-h5 q-mb-md">What is your Question?</div>

        <q-list bordered separator>
          <q-item
            to="/tables/answer"
            clickable
            v-ripple
          >
            <q-item-section>How do I do this?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
          </q-item>
          <q-item
            to="/tables/answer"
            clickable
            v-ripple
          >
            <q-item-section>How do I do that?</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="chevron_right" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </mobile-page-body>
  </mobile-page>
</template>

<script>

export default ({
  name: 'Questions'
})

</script>
