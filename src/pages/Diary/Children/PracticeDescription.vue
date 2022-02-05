<template>
  <mobile-page>
    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Session"
        />
      </template>
      <template #title>Practice</template>
    </mobile-page-header>
    <mobile-page-body>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div
          v-if="practice"
        >
          <q-img
            :src="practice.url"
            no-spinner
            no-transition
            class="no-pointer-events"
          />

          <div class="q-pa-lg">
            <div class="q-mb-md text-h5">{{ practice.caption }}</div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet earum fuga nam nisi.
              Alias, aliquam animi consequatur culpa inventore
              neque officia perferendis quo repudiandae.
              A aliquam magnam minus possimus tempore!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet earum fuga nam nisi.
              Alias, aliquam animi consequatur culpa inventore
              neque officia perferendis quo repudiandae.
              A aliquam magnam minus possimus tempore!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet earum fuga nam nisi.
              Alias, aliquam animi consequatur culpa inventore
              neque officia perferendis quo repudiandae.
              A aliquam magnam minus possimus tempore!</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Amet earum fuga nam nisi.
              Alias, aliquam animi consequatur culpa inventore
              neque officia perferendis quo repudiandae.
              A aliquam magnam minus possimus tempore!</p>

            <q-expansion-item
              v-model="expanded"
              icon="las la-eye"
              label="JSON"
              caption="See practice object in JSON format"
            >
              <pre>
                {{ practice }}
              </pre>
            </q-expansion-item>
          </div>
        </div>
      </transition>
    </mobile-page-body>
  </mobile-page>
</template>

<script>

  import {onActivated, onDeactivated, ref} from 'vue'
  import {useRoute} from 'vue-router'
  import store from 'src/myStore'

  export default ({
    data() {
      return {
        expanded: false
      }
    },
    setup() {

      let practice = ref()

      onActivated(() => {
        let route = useRoute()
        practice.value = store.getters.getPractice(route.params.practiceId)
      })

      onDeactivated(() => {
        practice.value = null
      })

      return {
        store,
        practice
      }
    }
  })

</script>
