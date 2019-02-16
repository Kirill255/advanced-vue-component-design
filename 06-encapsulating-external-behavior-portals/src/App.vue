<template>
  <div>
    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <user-settings-form :account-id="accountId"></user-settings-form>
      </div>
    </div>

    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import UserSettingsForm from './components/UserSettingsForm.vue'

export default {
  components: {
    UserSettingsForm,
  },
  data() {
    return {
      accountId: 7,
    }
  }
}
</script>

<style src="./assets/css/app.css"/>
