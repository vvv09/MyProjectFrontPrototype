<template>
  <mobile-page>
    <mobile-page-header>
      <template #title>Library</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="row">
        <router-link
            v-for="image in store.state.images"
            :key="image.id"
            :to="`/library/${ image.id }`"
            class="col-6"
        >
          <q-img
            :src="image.url"
            :ratio="1"
          />
        </router-link>
      </div>
    </mobile-page-body>
  </mobile-page>
</template>

<script>
import store from 'src/myStore'
export default ({
  name: 'Images',
  setup() {
    return {
      store
    }
  }
})

</script>
