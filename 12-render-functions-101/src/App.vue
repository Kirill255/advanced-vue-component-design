<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <hello-world tag="button"></hello-world>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  }
}
</script>

<style src="./assets/css/app.css"/>
