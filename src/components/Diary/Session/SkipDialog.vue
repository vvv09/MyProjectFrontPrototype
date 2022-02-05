<template>
  <page-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">{{ $t('Skipping_session') }}</div>
      <q-space/>
      <q-btn icon="close" flat round dense v-close-popup/>
    </q-card-section>

    <q-card-section>

      <p>
       {{ $t('Please_peak_the_reason') }}
      </p>

      <p><q-radio v-model="skipReason" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="illness"
                  :label="$t('Illness')"/></p>
      <p><q-radio v-model="skipReason" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="laziness"
                  :label="$t('Laziness')"/></p>
      <p><q-radio v-model="skipReason" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="forgot"
                  :label="$t('Forgot')"/></p>

      <q-btn
        @click="skipSession()"
        rounded
        color="primary"
        class="full-width"
        label="Skip session"
      />
    </q-card-section>
  </page-card>
</template>

<script>
  import {ref} from 'vue'

  export default {
    setup() {
      return {
        skipReason: ref('illness')
      }
    },
    methods: {
      skipSession() {
        console.log("Session skiped with reason - ", this.skipReason)
        this.$emit('close')
        this.$router.push('/diary')
      },
    }
  }
</script>

<style scoped>

</style>
