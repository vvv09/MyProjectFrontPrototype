<template>
  <mobile-page>
    <mobile-page-header>
      <template #title>Diary</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="q-pa-lg">

        <div class="text-h5 q-mb-md">Let's create a Badass iOS app!</div>

        <q-btn
          to="/diary/child"
          label="Go to Child Page"
          color="primary"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <q-btn
          to="/tables/answer"
          label="Go to Child Page in another section"
          color="warning"
          class="full-width q-mb-md"
          rounded
          unelevated
          no-caps
        />

        <p v-for="i in 20" :key="i">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto autem consectetur consequuntur dignissimos ea earum eos ex incidunt magnam, nam natus nesciunt provident quam quo reprehenderit sequi soluta totam.</p>
      </div>
    </mobile-page-body>
  </mobile-page>
</template>

<script>

export default ({
  name: 'Home'
})

</script>
