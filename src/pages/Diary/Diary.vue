<template>
  <mobile-page>

    <mobile-page-header>
      <template #buttons-left>
        <diary-practices-btn/>
      </template>
      <template #title>Diary</template>
      <template #buttons-right>
        <q-btn flat round dense color="primary" icon="las la-calendar" @click="showCalendar = !showCalendar"/>
        <q-btn flat round dense color="primary" icon="las la-ellipsis-v" >
          <q-menu
            auto-close
            transition-show="jump-down"
            transition-hide="jump-up"
          >
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Analyze and Statistic</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Export Diary</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Backup Diary</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </template>
    </mobile-page-header>

    <mobile-page-body>
      <hidden-area :show="showCalendar">
          <calendar/>
      </hidden-area>
      <diary-page v-if="getMobileDiaryPageState == 'diary'"/>
      <practices-page v-if="getMobileDiaryPageState == 'practices'"/>
    </mobile-page-body>

  </mobile-page>
</template>

<script>

  import {mapGetters} from "vuex"

  export default ({
    components: {
      'diary-practices-btn': require('components/Diary/DiaryPraticesBtn').default,
      'diary-page': require('components/Diary/DiaryPage').default,
      'calendar': require('components/Diary/Calendar').default,
      'practices-page': require('components/Diary/PracticesPage').default,
    },
    computed: {
      ...mapGetters('application', ['getMobileDiaryPageState']),
    },
    data() {
      return {
        showCalendar: false,
        editor: 'What you see is <b>what</b> you get.',
      }
    },
  })

</script>
