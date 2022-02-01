<template>
  <q-btn flat dense no-caps :label="username">
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Settings</div>
          <q-toggle v-if="userCanEdit" v-model="isEditModeEnabled" label="Edit mode"/>
        </div>

        <q-separator vertical inset class="q-mx-lg"/>

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">{{ username }}</div>

          <q-btn
            color="primary"
            label="Logout"
            @click="logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-menu>
  </q-btn>
</template>

<script>
  import {mapGetters, mapMutations} from "vuex";

  export default {
    name: "ProfileSelectButton",
    data() {
      return {
        editmode: false
      }
    },
    computed: {
      ...mapGetters('user', ['isEditModeEnabled', 'getName', 'isAdmin', 'isModerator']),
      username: function () {
        return this.getName
      },
      userCanEdit: function () {
        return this.isAdmin || this.isModerator
      }
    },
    methods: {
      ...mapMutations('user', ['switchEditMode']),
      logout() {
        window.location.href = this.$keycloak.createLogoutUrl()
      },
    },
    mounted() {

    }

  }
</script>

<style scoped>

</style>
