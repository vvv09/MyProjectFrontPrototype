<template>
  <page-card flat class="col">
    <q-card-section>
        <q-input type="password" dense outlined round
                 v-model="password_dict.current_password"
                 label="Current Password"/>

        <q-input type="password" dense outlined round
                 v-model="password_dict.new_password"
                 class="q-my-md"
                 label="New Password"/>

        <q-input type="password" dense outlined round
                 v-model="password_dict.confirm_new_password"
                 label="Confirm New Password"/>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn color="primary" label="Change Password" />
    </q-card-actions>
  </page-card>
</template>

<script>
  export default {
    name: "ChangePassword",
    data() {
      return {
        password_dict: {}
      }
    }
  }
</script>

<style scoped>

</style>
