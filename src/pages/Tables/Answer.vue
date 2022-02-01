<template>
  <mobile-page>
    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Tables"
        />
      </template>
      <template #title>Answer</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">How do I do this?</div>

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
  name: 'Answer'
})

</script>
