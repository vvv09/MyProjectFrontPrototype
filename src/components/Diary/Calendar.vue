<template>
  <q-date
    flat
    v-model="date"
    :class="dark ? 'bg-page-dark text-page-dark' : 'bg-page-light text-page-light'"
    minimal
    first-day-of-week="1"
    :events="eventsFn"
    :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
  />
</template>

<script>
    export default {
      data() {
        return {
          date: '2022/09/13',
          events: ['2022/09/01', '2022/09/05', '2022/09/06', '2022/09/09', '2022/09/23'],
          eventsFn(date) {
            if (date === '2022/09/01' ||
              date === '2022/09/05' ||
              date === '2022/09/06' ||
              date === '2022/09/09' ||
              date === '2022/09/23') {
              return true
            }
            return false
          },
        }
      },
      computed: {
        dark: function () {
          return this.$q.dark.isActive
        }
      }
    }
</script>

<style scoped>

</style>
