<template>
  <page-card class="col" flat>
  <q-list
    bordered
    padding
  >
    <q-item tag="label">
      <q-item-section>
        <q-item-label>Fullscreen</q-item-label>
        <q-item-label caption>Enable/disable fullscreen</q-item-label>
      </q-item-section>
      <q-item-section side >
        <q-btn
          round
          dense
          class="q-mr-xs"
          flat
          color="primary"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          @click="$q.fullscreen.toggle()"
        >
        </q-btn>
      </q-item-section>
    </q-item>

    <q-item tag="label">
      <q-item-section>
        <q-item-label>Dark mode</q-item-label>
        <q-item-label caption>Dark Mode is a supplemental mode that can be used to display mostly dark surfaces on the UI. The design reduces the light emitted by device screens while maintaining the minimum color contrast ratios required for readability.</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-btn
          class="q-mr-xs"
          color="primary"
          flat
          dense
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        />
      </q-item-section>
    </q-item>

    <q-item tag="label">
      <q-item-section>
        <q-item-label>Primary color</q-item-label>
        <q-item-label caption>Select main color of app</q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-btn
          class="q-mr-xs"
          color="primary"
          flat
          dense
          round
          icon="las la-palette"
        >
          <q-menu
            anchor="center left"
            self="center right"
            transition-show="flip-right"
            transition-hide="flip-left"
            auto-close
          >
            <q-color
              v-model="color_selected"
              no-header
              no-footer
              default-view="palette"
              class="my-picker"
              @click="changePrimaryColor()"
            />
          </q-menu>
        </q-btn>
      </q-item-section>
    </q-item>


  </q-list>
  </page-card>
</template>

<script>
    import {setCssVar} from "quasar";

    export default {
      name: "Appearance",
      data() {
        return {
          color_selected: '#009688',
        }
      },
      computed: {
        dark: function() {
          return this.$q.dark.isActive
        }
      },
      methods: {
        changePrimaryColor() {
          setCssVar('primary', this.color_selected)
        },
      },
    }
</script>

<style scoped>

</style>
