<template>
  <div class="constrain-more">

    <div
      class="row justify-center q-my-md"
      style="font-size: 24px"
    >
      {{ search === '' ? 'type something' : search }}

    </div>

    <q-tab-panels
      class="bg-transparent"
      v-model="keyboard"
      animated
      transition-prev="scale"
      transition-next="scale"
    >
      <q-tab-panel name="numbers">
        <div class="row q-mb-sm">
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="1" @click="handleKey('1')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="2" @click="handleKey('2')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="3" @click="handleKey('3')"/>
          </div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="4" @click="handleKey('4')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="5" @click="handleKey('5')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="6" @click="handleKey('6')"/>
          </div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="7" @click="handleKey('7')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="8" @click="handleKey('8')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="9" @click="handleKey('9')"/>
          </div>
        </div>
        <div class="row q-mb-sm">
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="primary full-width" label="0" @click="handleKey('0')"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="negative full-width" label="<-" @click="handleKeyBackspace"/>
          </div>
          <div class="col-4 text-center q-px-sm">
            <q-btn push outline rounded color="negative full-width" label="C" @click="handleKeyClear"/>
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel name="hebrew">
        Hebrew keyboard
      </q-tab-panel>

      <q-tab-panel name="greek">
        Greek keyboard
      </q-tab-panel>

      <q-tab-panel name="latin">
        Latin keyboard
      </q-tab-panel>

      <q-tab-panel name="enochian">
        Enochian keyboard
      </q-tab-panel>
    </q-tab-panels>

<!--    <q-separator/>-->

<!--    <q-tabs-->
<!--      v-model="keyboard"-->
<!--      align="justify"-->
<!--      inline-label-->
<!--      switch-indicator-->
<!--      narrow-indicator-->
<!--      class="q-mb-sm"-->
<!--    >-->
<!--      <q-tab class="text-black" name="numbers" label="1"/>-->
<!--      <q-tab class="text-hebrew" name="hebrew" label="H"/>-->
<!--      <q-tab class="text-greek" name="greek" label="G"/>-->
<!--      <q-tab class="text-latin" name="latin" label="L"/>-->
<!--      <q-tab class="text-enochian" name="enochian" label="E"/>-->
<!--    </q-tabs>-->

    <div class="q-px-lg q-my-lg">
      <q-btn
        push
        :disable="!search"
        outline
        rounded
        color="positive full-width"
        label="search"
        @click="handleSearch"
      />
    </div>

  </div>
</template>

<script>
  import { mapActions } from "vuex"
  import Common from 'src/utils/common'

  export default {
    data() {
      return {
        keyboard: 'numbers',
        search: ''
      }
    },
    computed: {
      dark: function() {
        return this.$q.dark.isActive
      }
    },
    methods: {
      ...mapActions('gematria', ['fetchNumber']),
      async handleSearch() {
        this.fetchNumber(this.search)
        if (Common.isMobile()) this.$router.push('/numbers/gematria')
      },
      handleKey(character) {
        this.search += character
      },
      handleKeyBackspace() {
        this.search = this.search.substring(0, this.search.length - 1);
      },
      handleKeyClear() {
        this.search = ''
      }
    },
  }
</script>

<style scoped>

</style>
