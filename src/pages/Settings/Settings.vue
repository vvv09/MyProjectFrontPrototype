<template>
  <mobile-page class="small-screen-only">
    <mobile-page-header>
      <template #title>Settings</template>
    </mobile-page-header>
    <mobile-page-body>

      <page-tab-panels v-model="tab">
        <q-tab-panel name="appearance" class="q-pa-none">
          <appearance-tab />
        </q-tab-panel>
        <q-tab-panel name="profile" class="q-pa-none">
          <profile-tab/>
        </q-tab-panel>
      </page-tab-panels>

    </mobile-page-body>
    <q-page-sticky expand position="bottom" :offset="[0, 0]">

      <q-tabs
        v-model="tab"
        no-caps
        dense
        switch-indicator
        active-color="primary"
        :class="dark ? 'bg-header-dark text-header-dark' : 'bg-header-light text-header-light'"
        bordered
        class="full-width shadow-2"
      >
        <q-tab name="appearance" label="Appearance"/>
        <q-tab name="profile" label="Profile"/>
      </q-tabs>

    </q-page-sticky>
  </mobile-page>
  <q-page
    class="q-pa-md large-screen-only constrain"
  >
    <q-card
      :class="dark ? 'bg-item-dark' : ''"
      bordered
      flat
    >
      <appearance-tab />
    </q-card>
  </q-page>
</template>

<script>
  export default ({
    name: 'Settings',
    data() {
      return {
        tab: 'appearance'
      }
    },
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
    components: {
      'appearance-tab': require('components/Settings/AppearanceTab').default,
      'profile-tab': require('components/Settings/ProfileTab').default,
    },
  })
</script>

