<template>
  <mobile-page>
    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Practices"
        />
      </template>
      <template #title>Start New Practice</template>
    </mobile-page-header>
    <mobile-page-body>
      <div class="q-pa-lg">
        <div class="text-h5 q-mb-md">This is a Grandchild Page!</div>

        <div class="q-py-md">
          <q-option-group
            v-model="group"
            :options="options"
            color="primary"
            inline
          />
        </div>

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
  import { ref } from 'vue'

  export default {
    name: 'Grandchild',
    setup () {
      return {
        group: ref('op1'),

        options: [
          {
            label: 'Kinda deep',
            value: 'op1'
          },
          {
            label: 'Very deep',
            value: 'op2'
          },
          {
            label: 'So deep!',
            value: 'op3'
          }
        ]
      }
    }
  }
</script>
