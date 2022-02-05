<template>
  <mobile-page>

    <mobile-page-header>
      <template #buttons-left>
        <mobile-page-header-button-back
          label="Practices"
        />
      </template>
      <template #title>Session</template>
      <template #buttons-right>
        <q-btn flat round dense color="primary" icon="las la-stopwatch" @click="showTimer = !showTimer"/>
        <q-btn flat round dense color="primary" icon="las la-ellipsis-v" >
          <q-menu
            auto-close
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <q-list style="min-width: 100px">
              <q-item clickable disable @click="doneSession">
                <q-item-section>Submit session</q-item-section>
              </q-item>
              <q-item clickable @click="submitForm">
                <q-item-section>Save session</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable @click="promptToSkipSession()">
                <q-item-section>Skip session</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </template>
    </mobile-page-header>

    <mobile-page-body>
      <hidden-area :show="showTimer">
        <timer/>
      </hidden-area>
      <transition
        appear
        enter-active-class="animated fadeIn slower"
        leave-active-class="animated fadeOut slower"
      >
        <div
          v-if="session"
        >
          <q-card-section
            :class="'bg-' + session.practiceType + '-5'"
          >
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">{{ session.practiceName }}</div>
                <div class="text-subtitle2">{{ $t('iteration') }}: {{ session.iteration }} / {{ $t('session') }}: {{ session.session }}</div>
              </div>
              <div class="col-auto">
                <q-btn :to='`/diary/${session.id}/${session.practiceId}`' color="white" round flat icon="chevron_right" />
              </div>
            </div>
          </q-card-section>

          <div class="q-pa-lg">
            <div class="row q-col-gutter-x-md">
              <q-input
                clearable
                outlined
                class="col-6"
                v-model="session.startTime"
                mask="time"
                :label="$t('Start_time')"
              >
                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time
                        v-model="session.startTime"
                        now-btn
                        format24h>
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat/>
                        </div>
                      </q-time>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                clearable
                type="number"
                min="0"
                class="col-6"
                outlined
                v-model="session.duration"
                :label="$t('Duration')"
              />
            </div>

            <q-separator spaced="20px"/>

            <p>
              <q-input outlined autogrow v-model="session.title" :label="$t('Title')" >
                <template v-slot:append>
                  <q-icon v-if="session.title == ''" name="las la-history" @click="session.title = 'Previous session TITLE value'" class="cursor-pointer" />
                </template>
              </q-input>
            </p>
            <p>
              <q-input outlined autogrow v-model="session.description" :label="$t('Description')" >
                <template v-slot:append>
                  <q-icon v-if="session.description == ''" name="las la-history" @click="session.description = 'Previous session DESCRIPTION value'" class="cursor-pointer" />
                </template>
              </q-input>
            </p>
            <p>
              <q-input outlined autogrow v-model="session.result" :label="$t('Result')" >
                <template v-slot:append>
                  <q-icon v-if="session.result == ''" name="las la-history" @click="session.result = 'Previous session RESULT value'" class="cursor-pointer" />
                </template>
              </q-input>
            </p>

            <q-separator spaced="20px"/>

            <div class="row q-mb-sm text-center">
              <div class="col">
                <q-rating
                  v-model="session.rate"
                  size="3.5em"
                  color="orange-5"
                  icon="star_border"
                  icon-selected="star"
                />
              </div>
            </div>

            <q-separator spaced="20px"/>

            <q-dialog v-model="showSkipPracticeDialog">
              <session-skip-dialog @close="showSkipPracticeDialog = false"/>
            </q-dialog>

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
        expanded: false,
        doneBtnDisabled: false,
        showSkipPracticeDialog: false,
        showTimer: false,
      }
    },
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
    setup() {

      let session = ref()

      onActivated(() => {
        let route = useRoute()
        session.value = store.getters.getSessions(route.params.sessionId)
      })

      onDeactivated(() => {
        session.value = null
      })

      return {
        store,
        session,
      }
    },
    methods: {
      doneSession() {
        console.log('.doneSession() invoked')
      },
      submitForm() {
        console.log('.submitForm() invoked')
      },
      promptToSkipSession() {
        console.log('.promptToSkipSession() invoked')
        this.showSkipPracticeDialog = true
      },
    },
    components: {
      'session-skip-dialog': require('components/Diary/Session/SkipDialog').default,
      'timer': require('components/Diary/Timer').default,
    },

  })

</script>

