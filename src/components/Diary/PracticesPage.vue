<template>
  <div>
    <div class="q-pa-sm">

      <div class="q-mt-lg q-mb-md">
        <div class="text-center">Adoration</div>
      </div>


      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Adorations</div>
            <div class="text-subtitle2">as thought by F.L.O.</div>
          </q-card-section>
          <q-card-section
            class="text-white q-pa-none full-width q-mb-sm">
            <q-btn-group class="full-width">
              <q-btn color="secondary" glossy label="Dawn" class="full-width"/>
              <q-btn color="secondary" glossy label="Noon" class="full-width"/>
              <q-btn color="secondary" glossy label="Evening" class="full-width"/>
            </q-btn-group>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Adorations</div>
            <div class="text-subtitle2">as thought by Liber Resh</div>
          </q-card-section>
          <q-card-section
            class="text-white q-pa-none full-width q-mb-sm">
            <q-btn-group class="full-width">
              <q-btn color="secondary" glossy label="Dawn" class="full-width"/>
              <q-btn color="secondary" glossy label="Noon" class="full-width"/>
              <q-btn color="secondary" glossy label="Evening" class="full-width"/>
              <q-btn color="secondary" glossy label="Midnight" class="full-width"/>
            </q-btn-group>
          </q-card-section>
        </q-card>
      </div>


      <div class="q-mt-lg">
        <div class="text-center">Practices for Today</div>
        <div class="text-center q-my-md">
          <span class="text-blue q-px-xs">Mysticism</span>
          <span class="text-green q-px-xs">Magick</span>
          <span class="text-orange q-px-xs">Kabala</span>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <practice-card
          v-for="(session, key) in store.state.sessions"
          :key="key"
          :session="session"
        />
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 q-mt-md">
        <q-btn
          @click="showStartNewPracticeBtn = false"
          v-if="showStartNewPracticeBtn"
          rounded
          outline
          color="primary"
          label="Start New Practice"
          class="full-width"/>
        <div v-else class="row q-col-gutter-x-sm">
          <div class="col-6">
            <q-btn @click="pushTo('/diary/practice-resume')" outline rounded color="primary" class="full-width"
                   label="Resume"/>
          </div>
          <div class="col-6">
            <q-btn @click="pushTo('/diary/practice-create')" outline rounded color="primary" class="full-width"
                   label="New"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import store from 'src/myStore'

  export default {

    components: {
      'practice-card': require('components/Diary/PracticeCard').default,
    },
    setup() {
      return {
        store
      }
    },

    data() {
      return {
        showStartNewPracticeBtn: true,
      }
    },
    methods: {
      pushTo(route) {
        this.showStartNewPracticeBtn = true
        this.$router.push(route)
      }
    },
  }
</script>

<style scoped>

</style>
