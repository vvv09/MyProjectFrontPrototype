<template>
  <page-frame>
    <page-block-title>{{ $t('Profile') }}</page-block-title>
    <profile />
    <page-block-title>{{ $t('Localization') }}</page-block-title>
    <change-locale />
    <page-block-title>{{ $t('Change_password') }}</page-block-title>
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
        'change-locale': require('components/Settings/Userpage/ChangeLocale').default,
        'change-password': require('components/Settings/Userpage/ChangePassword').default,
        'profile': require('components/Settings/Userpage/Profile').default,
      }
    }
</script>

<style scoped>

</style>
