<template>
  <page-card class="col" flat v-if="profile">
    <q-card-section horizontal>
      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" src="https://ru.gravatar.com/userimage/208843598/90c840a328857c5b73bf836e41c77c12.jpg"/>
      </q-card-section>
      <q-card-section class="q-pt-xs">
        <div class="text-overline">RUSSIA Region</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ profile.fullName }}</div>
        <div class="text-caption text-grey">
          {{ profile.email }}
        </div>
      </q-card-section>

    </q-card-section>

    <q-card-actions align="right">
      <q-btn v-if="profile.isUser" flat round color="green" icon="las la-certificate" />
      <q-btn v-if="profile.isModerator" flat round color="orange" icon="las la-user-shield" />
      <q-btn v-if="profile.isAdmin" flat round color="red" icon="las la-star" />
      <q-space />
      <q-btn @click="logout" color="primary" label="Logout"/>
    </q-card-actions>
  </page-card>
</template>

<script>

  import {mapGetters} from "vuex"

  export default {
    name: "Profile",
    data() {
      return {
        profile: {}
      }
    },
    // Раскоментить все, когда подключу Keycloak
    // computed: {
    //   ...mapGetters('user', ['getKeycloak', 'isGHUser', 'isModerator', 'isAdmin']),
    // },
    methods: {
      logout() {
        // window.location.href = this.$keycloak.createLogoutUrl()
      },
      setProfile() {
        // const keycloak = this.getKeycloak
        // this.profile.fullName = keycloak.tokenParsed.name
        // this.profile.email = keycloak.tokenParsed.email
        // this.profile.isUser = this.isGHUser
        // this.profile.isModerator = this.isModerator
        // this.profile.isAdmin = this.isAdminthis.profile.fullName = keycloak.tokenParsed.name
        this.profile.fullName = 'Valunskii Vadim'
        this.profile.email = 'valunskii_vadim@mail.mock.com'
        this.profile.isUser = true
        this.profile.isModerator = true
        this.profile.isAdmin = true
      }
    },
    mounted() {
      this.setProfile()
    }
  }
</script>

<style scoped>

</style>
