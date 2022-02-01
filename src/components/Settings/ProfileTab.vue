<template>
  <page-frame>
    <page-block-title>Profile</page-block-title>
    <profile />
    <page-block-title>Change Password</page-block-title>
    <change-password />
  </page-frame>
</template>

<script>
    export default {
      name: "ProfileTab",
      computed: {
        dark: function() {
          return this.$q.dark.isActive
        }
      },
      components: {
        'change-password': require('components/Settings/Userpage/ChangePassword').default,
        'profile': require('components/Settings/Userpage/Profile').default,
      },
      methods: {
        logout() {
          window.location.href = this.$keycloak.createLogoutUrl()
        }
      }
    }
</script>

<style scoped>

</style>
