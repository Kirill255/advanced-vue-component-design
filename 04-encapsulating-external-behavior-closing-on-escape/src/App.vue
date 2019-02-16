<template>
  <div>
    <div class="min-h-screen flex items-center justify-center">
      <button @click="modalOpen = true" type="button" class="btn btn-blue">Open Modal</button>
    </div>

    <announcement-modal
      :show="modalOpen"
      @close="modalOpen = false"
    ></announcement-modal>
  </div>
</template>

<script>
import AnnouncementModal from './components/AnnouncementModal.vue'

export default {
  components: {
    AnnouncementModal,
  },
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>

<style src="./assets/css/app.css"/>
