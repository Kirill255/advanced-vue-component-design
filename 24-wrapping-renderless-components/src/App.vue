<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Stacked Tag Input</label>
      <stacked-tag-input v-model="tags"></stacked-tag-input>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Inline Tag Input</label>
      <inline-tag-input v-model="tags"></inline-tag-input>
    </div>

    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"></tag-input>
    </div>

  </div>
</template>

<script>
import TagInput from './components/TagInput.vue'
import RenderlessTagInput from './components/RenderlessTagInput.vue'
import InlineTagInput from './components/InlineTagInput.vue'
import StackedTagInput from './components/StackedTagInput.vue'

export default {
  components: {
    TagInput,
    RenderlessTagInput,
    InlineTagInput,
    StackedTagInput,
  },
  data() {
    return {
      tags: ['awesome', 'excellent', 'amazing'],
    }
  }
}
</script>

<style src="./assets/css/app.css"/>
