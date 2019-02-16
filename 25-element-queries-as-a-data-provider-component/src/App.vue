<template>
  <div class="min-h-screen bg-grey-darker p-4">
    <div style="width: 420px" class="mx-auto border-l border-r border-dashed border-grey-dark py-4 mb-4">
      <profile-card></profile-card>
    </div>
    <div style="width: 300px" class="border-l border-r border-dashed border-grey-dark py-4 mx-auto">
      <profile-card></profile-card>
    </div>
  </div>
</template>

<script>
import WithDimensions from './components/WithDimensions.vue'
import ProfileCard from './components/ProfileCard.vue'

export default {
  components: {
    WithDimensions,
    ProfileCard,
  },
}
</script>

<style src="./assets/css/app.css"/>
