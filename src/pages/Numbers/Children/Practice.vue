<template>
  <mobile-page>
    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Diary"
        />
      </template>
      <template #title>Practice</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">This is a Child Page!</div>

        <q-btn
          to="/numbers/child/grandchild"
          label="Go to Grandchild Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <p v-for="i in 20" :key="i">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Ad architecto autem consectetur consequuntur
          dignissimos ea earum eos ex incidunt magnam,
          nam natus nesciunt provident quam quo reprehenderit
          sequi soluta totam.
        </p>
      </div>
    </mobile-page-body>
  </mobile-page>
</template>

<script>

export default ({
  name: 'Child'
})

</script>
